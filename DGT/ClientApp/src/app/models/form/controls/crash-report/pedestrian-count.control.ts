import { NumberControl } from 'app/models/form/controls/number-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PedestrianCountControl extends NumberControl {
  key   = 'pedestrianCount';
  label = 'Pedestrian Count';
}
