/*
 * The following is a base class for a set of controls that can represent
 * select and textbox test in form components.
 * https://angular.io/guide/dynamic-form#define-control-classes
 */

import { IFormUpdater } from 'app/models/interfaces/form-updater';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUpdatable } from 'app/models/interfaces/updatable';

export abstract class FieldControlBase<T> extends FormControl implements IFormUpdater, IUpdatable {
  public value: T | undefined;
  public key: string;
  public label: string;
  public description: string;
  public active: boolean;
  public visible: boolean;
  public required: boolean;
  public order: number | undefined;
  public controlType: string;
  public type: string;
  public readonly: boolean;
  public keyValueOptions = false;
  public validators: Validators;
  public options: {key: string | number, value: string}[];

  public constructor(
    value?: T,
    options: {
      active?: boolean,
      visible?: boolean,
      required?: boolean,
      order?: number
      readonly?: boolean,
      validators?: Validators
    } = {}) {
    super(value, options.validators);
    this.active = options?.active || true;
    this.visible = options?.visible || true;
    this.required = options?.required || false;
    this.order = options?.order || undefined;
    this.readonly = options?.readonly || false;
  }

  /*
   * Virtual functions...
   */
  public updateForm(newValue: any, form: FormGroup): void {}

  public update(sender: string, value: any): void {}

}

