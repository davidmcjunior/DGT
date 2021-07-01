import {FieldControlBase} from "app/models/form/controls/field-control-base";
import {FormControl} from "@angular/forms";
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlModelService} from "../../../../../services/forms/crash-event/form-control-model.service";

export abstract class CrashEventRecordFieldBase {
  public controlModel: FieldControlBase<any>;
  public control: FormControl;
  public crashEvent: CrashEventService;
  public controlModelService: FormControlModelService

  protected setInitValIf<T>(val: T): void {
    if (!this.controlModel.initialValue) {
      this.controlModel.initialValue = val;
    }
  }

  protected async subscribe(crashEventService: CrashEventService): Promise<any> {
    await this.crashEvent.crashEventIsLoaded$.subscribe((isLoaded) => {
      if (isLoaded) {
        const field = crashEventService.getField(this.controlModel.key);

        if (field) {
          field.subscribe({
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
    });
  }

  protected handleValue($event: Event): void {
    // @ts-ignore - bad warning here from tslint?
    let val: string | number | Date | undefined = $event.target.value;
    const type = this.controlModel.type;
    const field = this.crashEvent.getField(this.controlModel.key);

    if (!val) {
      return;
    }

    if (this.controlModel.type === 'number') {
      val = +val;
    }

    if (field) {
      field.next(val);
    }
  }
}

export interface OnValueChanged {
  onValueChanged($event: Event): void;
}
