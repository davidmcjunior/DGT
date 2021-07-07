import {Injectable} from "@angular/core";
import {BooleanSelectControl} from "../boolean-select-control";

@Injectable({
  providedIn: 'any'
})
export class DotPropertyControl extends BooleanSelectControl {
  key     = 'dotProperty';
  label   = 'DOT Property';
}
