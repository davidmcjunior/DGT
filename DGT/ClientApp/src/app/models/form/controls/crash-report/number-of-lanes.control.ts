import { NumberControl } from 'app/models/form/controls/number-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class NumberOfLanesControl extends NumberControl {
  key   = 'numberOfLanes';
  label = 'Num. of Lanes';
  type  = 'number';
}
