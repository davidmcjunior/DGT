import { Component, Input } from '@angular/core';

// see https://scotch.io/tutorials/angular-2-transclusion-using-ng-content

@Component({
  selector: 'card',
  templateUrl: './card.component.html',

})
export class CardComponent {
  @Input() hideHeader: boolean;
  @Input() hideFooter: boolean;
  @Input() collapsible = true;
  @Input() set collapsed(value: boolean) {
    this._collapsed = this.collapsible ? value : false;
  }
  get collapsed(): boolean {
    return this._collapsed;
  }

  private _collapsed: boolean;

  toggle() {
    if (this.collapsible) {
      this.collapsed = !this.collapsed;
    }
  }
}
