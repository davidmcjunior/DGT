import {SelectControl} from "../select-control";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class UsOrInterstateRoute extends SelectControl<string> {
  key   = 'usOrInterstateRoute';
  label = 'US or Interstate Route';

  // initial view state...
  visible = false;
}
