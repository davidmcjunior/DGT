import { SelectControl } from 'app/models/form/controls/select-control';

export class OnPublicRoadsControl extends SelectControl<string> {
  key     = 'onPublicRoads';
  label   = 'On Public Roads';
  options = [
    {key: 'yes',  value: 'Yes'},
    {key: 'no',  value: 'No'}
  ];
}
