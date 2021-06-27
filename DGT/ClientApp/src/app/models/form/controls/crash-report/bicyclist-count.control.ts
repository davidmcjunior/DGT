import { NumberControl } from 'app/models/form/controls/number-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class BicyclistCountControl extends NumberControl {
  key   = 'bicyclistCount';
  label = 'Bicyclist Count';
  min   = 0;
}
