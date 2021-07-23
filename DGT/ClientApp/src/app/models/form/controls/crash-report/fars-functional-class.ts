import {SelectControl} from "../select-control";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class FarsFunctionalClass extends SelectControl<string>{
  key   = 'farsFunctionalClass';
  label = 'FARS Functional Class';

  // initial view state...
  visible = false;
}
