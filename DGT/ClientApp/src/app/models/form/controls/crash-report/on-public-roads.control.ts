import {Injectable} from "@angular/core";
import {BooleanSelectControl} from "../boolean-select-control";

@Injectable({
  providedIn: 'any'
})
export class OnPublicRoadsControl extends BooleanSelectControl {
  key     = 'onPublicRoads';
  label   = 'On Public Roads';
}
