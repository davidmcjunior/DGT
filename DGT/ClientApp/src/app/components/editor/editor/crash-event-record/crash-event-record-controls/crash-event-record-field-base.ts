import {FieldControlBase} from "app/models/form/controls/field-control-base";
import {FormControl} from "@angular/forms";
import {CrashEventService} from "app/services/s4/crash-event.service";

export abstract class CrashEventRecordFieldBase {
  public controlModel: FieldControlBase<any>;
  public control: FormControl;

  protected setInitValIf<T>(val: T): void {
    if (!this.controlModel.initialValue) {
      this.controlModel.initialValue = val;
    }
  }

  protected subscribe(crashEventService: CrashEventService): void {
    crashEventService.fields[this.controlModel.key].subscribe({
      next: (v: any) => {
        this.setInitValIf(v);
        this.controlModel.value = v;
      },
      error: (err: any) => {
        console.log(`Error: ${this.controlModel.key} value was not set`, err);
      }
    });
  }
}

export interface OnValueChanged {
  onValueChanged($event: Event): void;
}
