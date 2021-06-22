import { FieldControlBase } from 'app/models/form/controls/field-control-base';

export abstract class SelectControl<T> extends FieldControlBase<T> {
  controlType     = 'select';
  keyValueOptions = false;

  public constructor(
    value?: T,
    options: {
      active?: boolean,
      visible?: boolean,
      required?: boolean,
      order?: number
      readonly?: boolean,
    } = {}) {
    super(value, options);
  }

}
