import { DatetimeControl } from 'app/models/form/controls/datetime-control';

export class CrashTimeControl extends DatetimeControl {
  key   = 'crashTime';
  label = 'Crash Time';
  type  = 'time';
}
