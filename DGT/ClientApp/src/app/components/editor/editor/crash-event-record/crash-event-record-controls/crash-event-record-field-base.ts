import {FieldControlBase} from "app/models/form/controls/field-control-base";
import {FormControl} from "@angular/forms";

export abstract class CrashEventRecordFieldBase {
  public controlModel: FieldControlBase<any>;
  public control: FormControl;
}

export interface OnValueChanged {
  onValueChanged($event: Event): void;
}
