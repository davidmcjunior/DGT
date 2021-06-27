import { NumberControl } from 'app/models/form/controls/number-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class CrashYearControl extends NumberControl {
  key   = 'crashYear';
  label = 'Crash Year';
  min   = 1955;
  max   = (new Date()).getFullYear();
}
