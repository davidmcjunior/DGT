import {Injectable} from "@angular/core";
import {TextBoxControl} from "../text-box-control";

@Injectable({
  providedIn: 'any'
})
export class FunctionalClassControl extends TextBoxControl {
  key   = 'functionalClass';
  label = 'Functional Class';

  // initial view state...
  visible = false;
}
