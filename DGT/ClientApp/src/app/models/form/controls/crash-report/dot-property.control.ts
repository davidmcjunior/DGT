import { SelectControl } from 'app/models/form/controls/select-control';

export class DotPropertyControl extends SelectControl<string> {
  key     = 'dotProperty';
  label   = 'DOT Property';
  options = [
    {key: 'yes',  value: 'Yes'},
    {key: 'no',  value: 'No'}
  ];
}
