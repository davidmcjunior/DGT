import { NumberControl } from 'app/models/form/controls/number-control';

export class OffsetDistanceControl extends NumberControl {
  key   = 'offsetDistance';
  label = 'Offset Distance';
  min   = 0;
}
