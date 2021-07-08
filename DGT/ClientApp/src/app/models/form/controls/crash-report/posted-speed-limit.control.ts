import {Injectable} from "@angular/core";
import {TextBoxControl} from "../text-box-control";

@Injectable({
  providedIn: 'any'
})
export class PostedSpeedLimitControl extends TextBoxControl {
  // TODO: with what values do we populate this field?
  public static SpeedLimits = [
    10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60 , 65, 70, 75
  ];

  key   = 'postedSpeedLimit';
  label = 'Posted Speed Limit';
}
