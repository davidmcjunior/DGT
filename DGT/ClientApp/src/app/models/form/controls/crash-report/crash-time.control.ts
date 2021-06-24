import { DatetimeControl } from 'app/models/form/controls/datetime-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CrashTimeControl extends DatetimeControl {
  key   = 'crashTime';
  label = 'Crash Time';
  type  = 'time';
}
