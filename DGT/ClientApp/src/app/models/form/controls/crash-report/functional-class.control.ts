import { SelectControl } from 'app/models/form/controls/select-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class FunctionalClassControl extends SelectControl<string> {
  key   = 'functionalClass';
  label = 'Functional Class';

  options = [
    {key: 'yes',  value: 'Yes'},
    {key: 'no',  value: 'No'}
  ];
}