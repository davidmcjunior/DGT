import { SelectControl } from 'app/models/form/controls/select-control';

export class FunctionalClassControl extends SelectControl<string> {
  key   = 'functionalClass';
  label = 'Functional Class';
  options = [];
}
