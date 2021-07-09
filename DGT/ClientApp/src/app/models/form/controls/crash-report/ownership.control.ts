import { TextBoxControl } from 'app/models/form/controls/text-box-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class OwnershipControl extends TextBoxControl {
  key   = 'ownership';
  label = 'Ownership';

  // initial view state...
  visible = false;
}
