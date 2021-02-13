import { Directive, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CheckedState, TreeViewComponent, TreeItemLookup, TreeItem } from '@progress/kendo-angular-treeview';
import { Subscription } from 'rxjs';

const indexChecked = (keys: any[], index: string) => keys.filter(k => k === index).length > 0;

/**
 * A directive which manages the node in-memory checked state of the TreeView.
 * https://www.telerik.com/kendo-angular-ui-develop/components/treeview/checkboxes/
 */
@Directive({ selector: '[customCheck]' })
export class CustomCheckDirective implements OnInit, OnDestroy {
  @Input() public set isChecked(value: <T>(item: T, index: string) => CheckedState) {
    this.treeView.isChecked = value;
  }

  @Input() public set checkBy(value: any) {
    this.checkKey = value;
  }


  // Defines the collection that will store the checked keys.
  @Input() public checkedKeys: any[] = [];

  @Input() public checkMode: string;
  @Input() public checkKey: string;
  @Input() public anyOrAllText: string;

  // Fires when the `checkedKeys` collection was updated.
  @Output() public checkedKeysChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  protected subscriptions: Subscription = new Subscription(() => { });

  constructor(protected treeView: TreeViewComponent) { }

  public ngOnInit(): void {
    if (this.isMultiple) {
      this.subscriptions.add(
        this.treeView.checkedChange
          .subscribe((e: TreeItemLookup) => this.checkMultiple(e))
      );
    }
    else {
      this.subscriptions.add(
        this.treeView.checkedChange
          .subscribe((e: TreeItemLookup) => this.checkSingle(e))
      );
    }

    this.treeView.checkboxes = true; // Shows checkboxes
    this.treeView.isChecked = this.isItemChecked.bind(this);
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  get isMultiple(): boolean {
    return this.checkMode === 'multiple';
  }

  protected isIndexChecked(index: string): CheckedState {
    let checkedKeys = this.checkedKeys.filter((k) => k.indexOf(index) === 0);
    if (indexChecked(checkedKeys, index)) {
      return 'checked';
    }

    return 'none';
  }

  protected isItemChecked(dataItem: any, index: string): CheckedState {
    if (!this.checkedKeys) {
      return 'none';
    }

    let keyIndex = this.checkedKeys.indexOf(this.itemKey({ dataItem, index }));
    return keyIndex > -1 ? 'checked' : 'none';
  }

  protected itemKey(item: { dataItem: any, index: string }) {
    if (!this.checkKey) {
      return item.index;
    }
    if (typeof this.checkKey === 'string') {
      return item.dataItem[this.checkKey];
    }

    // checkKey is typed as a string. It can not be a function
    /*
    if (typeof this.checkKey === 'function') {
        return this.checkKey(item);
    }
    */
  }

  protected checkSingle(node: TreeItemLookup): void {
    if (!this.checkedKeys) { this.checkedKeys = []; }

    let key = this.itemKey(node.item);
    this.checkedKeys = this.checkedKeys[0] !== key ? [key] : [];
    this.notify();
  }

  protected checkMultiple(node: TreeItemLookup): void {
    if (!this.checkedKeys) { this.checkedKeys = []; }

    this.checkNode(node);
    this.checkParents(node.parent);
    this.notify();
  }

  private checkNode(node: TreeItemLookup, check?: boolean): void {
    let key = this.itemKey(node.item);
    let idx = this.checkedKeys.indexOf(key);

    let isChecked = idx > -1;
    let isKeyPresent = key !== undefined && key !== undefined;
    let shouldCheck = check === undefined ? !isChecked : check;

    if (!isKeyPresent || (isChecked && check)) {
      return;
    }

    if (isChecked) {
      this.checkedKeys.splice(idx, 1);
    }
    else {
      this.checkedKeys.push(key);
    }

    // Check if parent selected
    if (node.children) {
      node.children.map(n => this.checkNode(n, shouldCheck));
    }
  }

  private checkParents(parent: any): void {
    let currentParent: any = parent;

    while (currentParent) {
      let parentKey = this.itemKey(currentParent.item);
      let parentIndex = this.checkedKeys.indexOf(parentKey);

      // If more than one child and are all selected, select parent Any/All and deselect all children
      if (this.allChildrenSelected(currentParent.children)) {
        if (parentIndex === -1) {
          this.checkedKeys.push(parentKey);
        }
      }
      else if (parentIndex > -1) {
          this.checkedKeys.splice(parentIndex, 1);
      }

      currentParent = currentParent.parent;
    }
  }

  // Return true if all the items in children are checked
  private allChildrenSelected(children: any[]): boolean {
    let isCheckedReducer = (checked: CheckedState, item: TreeItem) => (
      checked &&
      this.isItemChecked(item.dataItem, item.index) === 'checked'
    );
    return children.reduce(isCheckedReducer, true);
  }

  private notify(): void {
    this.checkedKeysChange.emit(this.checkedKeys.slice());
  }
}

