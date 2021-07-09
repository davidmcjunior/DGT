import { SelectControl } from 'app/models/form/controls/select-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class RoadwayTypeControl extends SelectControl<string> {
  public static Types = [
    {key: 'I', value: 'Interstate'},
    {key: 'U', value: 'US'}
  ];

  key             = 'roadwayType';
  label           = 'Roadway Type';
  options         = RoadwayTypeControl.Types;
  keyValueOptions = true;

  // initial view state...
  visible = false;
}
