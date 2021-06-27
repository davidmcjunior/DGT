import { SelectControl } from 'app/models/form/controls/select-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class OffsetDirectionControl extends SelectControl<string> {
  key   = 'offsetDirection';
  label = 'Offset Direction';
  options = [
    {key: 'east', value: 'East'},
    {key: 'west', value: 'West'}
  ];
}
