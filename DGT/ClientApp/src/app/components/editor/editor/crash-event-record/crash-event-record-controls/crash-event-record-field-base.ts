import {FieldControlBase} from "app/models/form/controls/field-control-base";
import {FormControl} from "@angular/forms";
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "../../../../../models/form/form-control-factory";

export abstract class CrashEventRecordFieldBase {
  public controlModel: FieldControlBase<any>;
  public control: FormControl;
  public crashEvent: CrashEventService;
  public controlFactory: FormControlFactory;

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

  protected handleValue($event: Event): void {
    // @ts-ignore - bad warning here from tslint?
    let val: string | number | Date | undefined = $event.target.value;
    const type = this.controlModel.type;

    if (!val) {
      return;
    }

    if (this.controlModel.type === 'number') {
      val = +val;
    }

    this.crashEvent.fields[this.controlModel.key].next(val);
  }
}

export interface OnValueChanged {
  onValueChanged($event: Event): void;
}
