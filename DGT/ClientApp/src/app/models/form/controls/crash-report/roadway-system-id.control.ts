import { SelectControl } from 'app/models/form/controls/select-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RoadwaySystemIdControl extends SelectControl<number> {
  public static Ids = [
    {key: 1, value: 'Interstate'},
    {key: 2, value: 'US'},
    {key: 3, value: 'State'},
    {key: 4, value: 'County'},
    {key: 5, value: 'Local'},
    {key: 6, value: 'Turnpike / Toll'},
    {key: 7, value: 'Forest Road'},
    {key: 8, value: 'Private Roadway'},
    {key: 9, value: 'Parking Lot'},
    {key: 77, value: 'Other'}
  ];

  key             = 'roadwaySystemId';
  label           = 'Roadway System Id';
  options         = RoadwaySystemIdControl.Ids;
  keyValueOptions = true;

}
