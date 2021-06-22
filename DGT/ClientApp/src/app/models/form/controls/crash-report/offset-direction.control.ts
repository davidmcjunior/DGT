import { SelectControl } from 'app/models/form/controls/select-control';

export class OffsetDirectionControl extends SelectControl<string> {
  key   = 'offsetDirection';
  label = 'Offset Direction';
  options = [
    {key: 'east', value: 'East'},
    {key: 'west', value: 'West'}
  ];
}
