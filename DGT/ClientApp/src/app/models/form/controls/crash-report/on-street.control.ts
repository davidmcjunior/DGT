import { TextBoxControl } from 'app/models/form/controls/text-box-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class OnStreetControl extends TextBoxControl {
  key   = 'onStreet';
  label = 'On Street';
}
