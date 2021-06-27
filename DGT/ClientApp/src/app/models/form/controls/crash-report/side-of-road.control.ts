import { SelectControl } from 'app/models/form/controls/select-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class SideOfRoadControl extends SelectControl<string> {
  public static Codes = [
    {key: 'I', value: 'Middle of Intersection'},
    {key: 'E', value: 'Off end of maintained roadway at T-shaped intersection'},
    {key: 'L', value: 'Off end of maintained roadway at T-shaped intersection'},
    {key: 'M', value: 'Median'},
    {key: 'P', value: 'Parking lot/private property'},
    {key: 'R', value: 'Right (lanes bound in direction of increasing mile-points)'},
    {key: 'S', value: 'Right-hand (lanes bound in direction of increasing mile-points) side-road, not on the maintained roadway'},
    {key: 'T', value: 'Left-hand (lanes bound in direction of decreasing mile-points) side-road, not on the maintained roadway'},
    {key: 'U', value: 'Unknown'}
  ];

  key             = 'sideOfRoad';
  label           = 'Side of Road';
  options         = SideOfRoadControl.Codes;
  keyValueOptions = true;
}
