import {FieldControlBase} from "app/models/form/controls/field-control-base";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlModelService} from "app/services/forms/crash-event/form-control-model.service";

export abstract class CrashEventRecordFieldBase {
  public controlModel: FieldControlBase<any>;
  public form: FormGroup;
  public crashEvent: CrashEventService;
  protected formBuilder: FormBuilder;
  protected controlModelService: FormControlModelService

  /**
   *
   * @param val
   * @protected
   */
  public setInitValIf<T>(val: T): this {
    if (!this.controlModel.initialValue) {
      this.controlModel.initialValue = val;
    }

    return this;
  }

  /**
   *
   * @param val
   */
  public setValue<T>(val: T): this {
    if (val) {
      this.controlModel.value = val;
    }

    return this;
  }

  /**
   *
   */
  public getFieldKey(): string {
    return this.controlModel.key;
  }

  /**
   *
   * @protected
   */
  protected initNgForm(): this {
    this.form = this.formBuilder.group({
      [this.controlModel.key]: this.formBuilder.control(this.controlModel.value)
    });

    return this;
  }

  /**
   *
   * @param $event
   * @protected
   */
  protected handleValueChange($event: Event): void {
    // @ts-ignore - bad warning here from tslint?
    let val: string | number | Date | undefined = $event.target.value;
    const type = this.controlModel.type;
    const field = this.crashEvent.getField(this.controlModel.key);

    if (val) {
      if (type === 'number') {
        val = +val;
      }

      if (field) {
        field.next(val);
      }
    }
  }

}

export interface OnValueChanged {
  onValueChanged($event: Event): void;
}
