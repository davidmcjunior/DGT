import { NumberControl } from 'app/models/form/controls/number-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class OffsetDistanceControl extends NumberControl {
  key   = 'offsetDistance';
  label = 'Offset Distance';
  min   = 0;
}
