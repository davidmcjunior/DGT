import {Injectable} from "@angular/core";
import {TextBoxControl} from "../text-box-control";

@Injectable({
  providedIn: 'any'
})
export class RouteSignageControl extends TextBoxControl {
  key   = 'routeSignage';
  label = 'Route Signage';

  // initial view state...
  visible = false;
}
