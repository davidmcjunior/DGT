import {FieldControlBase} from "app/models/form/controls/field-control-base";

export class CrashEventRecordFieldBase {
  public controlModel: FieldControlBase<any>;
}

export interface OnValueChanged {
  onValueChanged($event: Event): void;
}
