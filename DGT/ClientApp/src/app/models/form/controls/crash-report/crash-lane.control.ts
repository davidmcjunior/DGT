import { SelectControl } from 'app/models/form/controls/select-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class CrashLaneControl extends SelectControl<string> {
  public static Codes = [
    {key: 'A', value: 'Acceleration/merge lane'},
    {key: 'B', value: 'Tollbooth plaza'},
    {key: 'C', value: 'Pedestrian in crosswalk'},
    {key: 'D', value: 'Driveway'},
    {key: 'E', value: 'Off end of maintained roadway at T-shaped intersection'},
    {key: 'H', value: 'Island (median that divides lanes of traffic going in the same direction)'},
    {key: 'K', value: 'Service/access road'},
    {key: 'L', value: 'Left-turn-only lane'},
    {key: 'M', value: 'Median/middle'},
    {key: 'N', value: 'Not applicable'},
    {key: 'P', value: 'Parking lane (with designated parking spaces)'},
    {key: 'R', value: 'Right-turn-only lane'},
    {key: 'S', value: 'Side of roadway/shoulder/off-road/emergency lane'},
    {key: 'T', value: 'Continuous left-turn lane accessible from both directions'},
    {key: 'U', value: 'Unknown'},
    {key: 'V', value: 'Bicycle in designated bicycle travel lane'},
    {key: 'X', value: 'On/off-ramp'},
  ];
  key     = 'crashLane';
  label   = 'Crash Lane';
  options = CrashLaneControl.Codes;
}
