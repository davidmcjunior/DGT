import { FieldControlBase } from 'app/models/form/controls/field-control-base';

export abstract class NumberControl extends FieldControlBase<number> {
  controlType = 'textbox';
  type = 'number';
  min: number | undefined;
  max: number | undefined;

  public constructor(
    value: number,
    options: {
      min?: number,
      max?: number,
      active?: boolean,
      required?: boolean,
      order?: number
    } = {}) {
    super(value, options);
    this.min = options.min;
    this.max = options.max;
  }

}
