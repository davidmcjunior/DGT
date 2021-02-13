import { Component, Input } from '@angular/core';

// see https://scotch.io/tutorials/angular-2-transclusion-using-ng-content

@Component({
  selector: 'filter-card',
  templateUrl: './filter-card.component.html',

})
export class FilterCardComponent {
  @Input() hideHeader: boolean;
  @Input() hideFooter: boolean;
  @Input() collapsible = true;
  @Input() selectedText: string[];
  @Input() set collapsed(value: boolean) {
    this._collapsed = this.collapsible ? value : false;
  }
  get collapsed(): boolean {
    return this._collapsed;
  }

  get showClearButton(): boolean {
    return (this.selectedText && this.selectedText.length > 0);
  }
  private _collapsed: boolean;

  toggle() {
    if (this.collapsible) {
      this.collapsed = !this.collapsed;
    }
  }

  clearSelection() {
    alert('clear');
  }
}
