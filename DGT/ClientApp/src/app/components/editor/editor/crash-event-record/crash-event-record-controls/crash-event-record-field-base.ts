import {FieldControlBase} from "app/models/form/controls/field-control-base";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlModelService} from "app/services/forms/crash-event/form-control-model.service";
import {BehaviorSubject} from "rxjs";

export abstract class CrashEventRecordFieldBase {
  protected field$: BehaviorSubject<any>;

  public controlModel: FieldControlBase<any>;
  public form: FormGroup;

  public constructor(
    controlName: string,
    public crashEvent: CrashEventService,
    protected controlModelService: FormControlModelService,
    protected formBuilder: FormBuilder
  ) {
    this.controlModel = this.controlModelService.getControl(controlName);
  }

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
   * @param ces
   * @param fieldName
   * @param value
   * @protected
   */
  protected async pushValue(ces: CrashEventService, fieldName: string, value: string | number | Date): Promise<boolean> {
    const field = ces.getFieldSubject(fieldName);

    if (field && value) {
      field.next(value);
      return true;
    }

    return false;
  }

  /**
   *
   * @param value
   * @param type
   * @protected
   */
  protected cleanValue(value: string | number | Date, type: string = 'string'): string | number | Date {
    return value;
  }

  /**
   *
   * @param $event
   * @protected
   */
  protected handleValueChange($event: Event): void {
    // @ts-ignore - bad warning here from tslint?
    const value = this.cleanValue($event.target.value, this.controlModel.type)
    this.pushValue(this.crashEvent, this.controlModel.key, value).then(r => {});
  }

}

export interface OnValueChanged {
  onValueChanged($event: Event): void;
}
