import { FieldControlBase } from 'app/models/form/controls/field-control-base';

export abstract class SelectControl<T> extends FieldControlBase<T> {
  controlType     = 'select';
  type            = 'number';
  keyValueOptions = false;
}
