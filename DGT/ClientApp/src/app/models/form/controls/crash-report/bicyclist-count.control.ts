import { NumberControl } from 'app/models/form/controls/number-control';

export class BicyclistCountControl extends NumberControl {
  key   = 'bicyclistCount';
  label = 'Bicyclist Count';
  min   = 0;
}
