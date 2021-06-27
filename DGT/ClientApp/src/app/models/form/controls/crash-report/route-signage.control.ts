import { SelectControl } from 'app/models/form/controls/select-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class RouteSignageControl extends SelectControl<any> {
  key   = 'routeSignage';
  label = 'Route Signage';
}
