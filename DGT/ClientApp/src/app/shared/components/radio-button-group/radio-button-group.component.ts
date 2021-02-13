import { Component, Input } from '@angular/core';
import { makeProvider, AbstractValueAccessor } from 'src/app/shared/models';

@Component({
  selector: 'radio-button-group',
  providers: [makeProvider(RadioButtonGroupComponent)],
  templateUrl: './radio-button-group.component.html'
})
export class RadioButtonGroupComponent extends AbstractValueAccessor {
  @Input() name: string;
  @Input() groupLabel: string;
  @Input() items: any[];
  @Input() labelMember?: string;
  @Input() tooltipMember?: string;
  @Input() valueMember?: string;
  @Input() inline = true;

  private get selectedItemValue(): any {
    // `this.value` maps to `ngModel` and is provided by the `AbstractValueAccessor` base class.
    return this.value;
  }

  private set selectedItemValue(value: any) {
    // `this.value` maps to `ngModel` and is provided by the `AbstractValueAccessor` base class.
    this.value = value;
  }

  isChecked(item: any): boolean {
    let itemValue = this.getItemValue(item);
    return this.selectedItemValue === itemValue;
  }

  select(item: any) {
    let itemValue = this.getItemValue(item);
    this.selectedItemValue = itemValue;
  }

  getItemLabel(item: any): any {
    let label = this.labelMember !== undefined
      ? item[this.labelMember]
      : item;
    return label;
  }

  getItemTooltip(item: any): any {
    let label = this.tooltipMember !== undefined
      ? item[this.tooltipMember]
      : undefined;
    return label;
  }

  private getItemValue(item: any): any {
    let value = this.valueMember !== undefined
      ? item[this.valueMember]
      : item;
    return value;
  }

}
