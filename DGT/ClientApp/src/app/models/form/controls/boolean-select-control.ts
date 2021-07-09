import { FieldControlBase } from 'app/models/form/controls/field-control-base';

export abstract class BooleanSelectControl extends FieldControlBase<boolean> {
  controlType = 'boolean-select';
  type        = 'boolean';
}
