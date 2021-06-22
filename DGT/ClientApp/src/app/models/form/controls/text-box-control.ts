import { FieldControlBase } from 'app/models/form/controls/field-control-base';

export abstract class TextBoxControl extends FieldControlBase<string>{
  controlType = 'textbox';
  type = 'text'; // default
}
