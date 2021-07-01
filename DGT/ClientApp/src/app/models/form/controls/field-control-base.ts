/*
 * The following is a base class for a set of controls that can represent
 * select and textbox test in form components.
 * https://angular.io/guide/dynamic-form#define-control-classes
 */


export abstract class FieldControlBase<T> {
  public value: T | undefined;
  public initialValue: T | undefined;
  public key: string;
  public label: string;
  public description: string;
  public active: boolean;
  public visible: boolean;
  public required: boolean;
  public order: number | undefined;
  public controlType: string;
  public type: string;
  public min: number = 0;
  public max: number = 1000;
  public readonly: boolean;
  public keyValueOptions = false;
  public options: {key: string | number, value: string}[];

  public constructor(
    value?: T,
    options: {
      active?: boolean,
      visible?: boolean,
      required?: boolean,
      order?: number
      readonly?: boolean,
      controlType?: string
    } = {}) {
    this.value = value || undefined;
    this.initialValue = value || undefined;
    this.active = options?.active || true;
    this.visible = options?.visible || true;
    this.required = options?.required || false;
    this.order = options?.order || undefined;
    this.readonly = options?.readonly || false;
    this.controlType = options?.controlType || 'text';
  }

}

