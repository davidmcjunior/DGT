import { FieldControlBase } from 'app/models/form/controls/field-control-base';

export abstract class DatetimeControl extends FieldControlBase<Date> {
  controlType = 'textbox';
  type = 'date'; // default
}
