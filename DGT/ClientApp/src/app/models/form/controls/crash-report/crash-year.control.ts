import { NumberControl } from 'app/models/form/controls/number-control';

export class CrashYearControl extends NumberControl {
  key   = 'crashYear';
  label = 'Crash Year';
  min   = 1955;
  max   = (new Date()).getFullYear();
}
