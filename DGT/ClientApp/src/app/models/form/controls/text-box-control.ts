import { FieldControlBase } from 'app/models/form/controls/field-control-base';

export abstract class TextBoxControl extends FieldControlBase<string>{
  controlType = 'text';
  type        = 'string'; // default
}
