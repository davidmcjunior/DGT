import { SelectControl } from 'app/models/form/controls/select-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class PostedSpeedLimitControl extends SelectControl<number> {
  // TODO: with what values do we populate this field?
  public static SpeedLimits = [
    45, 50, 55, 60 , 65, 70, 75
  ];

  key   = 'postedSpeedLimit';
  label = 'Posted Speed Limit';
}
