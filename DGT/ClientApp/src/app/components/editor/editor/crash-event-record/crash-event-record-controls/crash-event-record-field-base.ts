import {FieldControlBase} from "app/models/form/controls/field-control-base";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlModelService} from "app/services/forms/crash-event/form-control-model.service";
import {BehaviorSubject} from "rxjs";

export abstract class CrashEventRecordFieldBase<T> {
  protected field$: BehaviorSubject<any>;

  // If this is changed to type T, template value comparisons fail... Nrrrgggh
  public value: any;
  public controlModel: FieldControlBase<any>;

  // These are not currently used, and can probably be removed...
  public form: FormGroup;
  public formControl: FormControl;

  public constructor(
    controlName: string,
    public crashEvent: CrashEventService,
    protected controlModelService: FormControlModelService,
    protected formBuilder: FormBuilder
  ) {
    this.controlModel = this.controlModelService.getControl(controlName);
  }

  /**
   * For use in templates...
   * @param val
   */
  public equalsValue(val: T): boolean {
    return this.value == val;
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
  public setValue(val: T): this {
    this.controlModel.value = this.value = val;

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
      [this.getFieldKey()]: this.formBuilder.control(this.value)
    });

    return this;
  }

  // /**
  //  *
  //  * @protected
  //  */
  // protected hide(): void {
  //   this.controlModel.visible = false;
  // }
  //
  // /**
  //  *
  //  * @protected
  //  */
  // protected show(): void {
  //   this.controlModel.visible = true;
  // }

  /**
   *
   * @param ces
   * @param fieldName
   * @param value
   * @protected
   */
  protected async pushValue(ces: CrashEventService, fieldName: string, value: any): Promise<boolean> {
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
  protected cleanValue(value: string | number | boolean | Date, type: string = 'string'): string | number | Date | boolean {
    // switch (type) {
      // case 'boolean':
      //   return <boolean>value;
    //   case 'number':
    //     return +value;
    // }
    return value;
  }

  /**
   *
   * @param $event
   * @protected
   */
  protected handleValueChange($event: Event): void {
    // @ts-ignore - bad warning here from tslint?
    const value = this.cleanValue($event.target.value, this.controlModel.type);

    this.pushValue(this.crashEvent, this.getFieldKey(), value).then(r => {});
  }

}

export interface OnValueChanged {
  onValueChanged($event: Event): void;
}
