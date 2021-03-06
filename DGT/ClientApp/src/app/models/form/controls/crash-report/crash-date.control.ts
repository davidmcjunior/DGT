import { DatetimeControl } from 'app/models/form/controls/datetime-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class CrashDateControl extends DatetimeControl {
  public static Months = [
    {key: 1, value: 'January'},
    {key: 2, value: 'February'},
    {key: 3, value: 'March'},
    {key: 4, value: 'April'},
    {key: 5, value: 'May'},
    {key: 6, value: 'June'},
    {key: 7, value: 'July'},
    {key: 8, value: 'August'},
    {key: 9, value: 'September'},
    {key: 10, value: 'October'},
    {key: 11, value: 'November'},
    {key: 12, value: 'December'}
  ];
  key   = 'crashDate';
  label = 'Crash Date';
}
