import {FieldControlBase} from "app/models/form/controls/field-control-base";
import {FormControl} from "@angular/forms";

export abstract class CrashEventRecordFieldBase {
  public controlModel: FieldControlBase<any>;
  public control: FormControl;

  protected setInitValIf<T>(val: T): void {
    if (!this.controlModel.initialValue) {
      this.controlModel.initialValue = val;
    }
  }
}

export interface OnValueChanged {
  onValueChanged($event: Event): void;
}
