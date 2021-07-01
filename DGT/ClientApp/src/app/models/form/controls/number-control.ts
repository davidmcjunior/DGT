import { FieldControlBase } from 'app/models/form/controls/field-control-base';

export abstract class NumberControl extends FieldControlBase<number> {
  controlType = 'number';
  type = 'number';
}
