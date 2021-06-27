import { Injectable } from '@angular/core';

import { FieldControlBase } from 'app/models/form/controls/field-control-base';
import { CityControl } from 'app/models/form/controls/crash-report/city.control';
import { CrashDateControl } from 'app/models/form/controls/crash-report/crash-date.control';
import { CrashTimeControl } from 'app/models/form/controls/crash-report/crash-time.control';
import { OnStreetControl } from 'app/models/form/controls/crash-report/on-street.control';
import { IntersectingStreetControl } from 'app/models/form/controls/crash-report/intersecting-street.control';
import { OffsetDirectionControl } from 'app/models/form/controls/crash-report/offset-direction.control';
import { OffsetDistanceControl } from 'app/models/form/controls/crash-report/offset-distance.control';
import { CountyControl } from 'app/models/form/controls/crash-report/county.control';
import { OnPublicRoadsControl } from 'app/models/form/controls/crash-report/on-public-roads.control';
import { DotPropertyControl } from 'app/models/form/controls/crash-report/dot-property.control';
import { SiteLocationControl } from 'app/models/form/controls/crash-report/site-location.control';
import { SideOfRoadControl } from 'app/models/form/controls/crash-report/side-of-road.control';
import { CrashLaneControl } from 'app/models/form/controls/crash-report/crash-lane.control';
import { CrashInjuryControl } from 'app/models/form/controls/crash-report/crash-injury.control';
import { RoadwaySystemIdControl } from 'app/models/form/controls/crash-report/roadway-system-id.control';
import { NumberOfLanesControl } from 'app/models/form/controls/crash-report/number-of-lanes.control';
import { OwnershipControl } from 'app/models/form/controls/crash-report/ownership.control';
import { RouteSignageControl } from 'app/models/form/controls/crash-report/route-signage.control';
import { PostedSpeedLimitControl } from 'app/models/form/controls/crash-report/posted-speed-limit.control';
import { FunctionalClassControl } from 'app/models/form/controls/crash-report/functional-class.control';
import { CrashYearControl } from 'app/models/form/controls/crash-report/crash-year.control';
import { BicyclistCountControl } from 'app/models/form/controls/crash-report/bicyclist-count.control';
import { PedestrianCountControl } from 'app/models/form/controls/crash-report/pedestrian-count.control';
import { CommentsControl } from 'app/models/form/controls/crash-report/comments.control';



@Injectable({
  providedIn: 'root'
})
export class FormControlFactory {

  public getControl(key: string, value: any = ''): FieldControlBase<any> {
    let control: FieldControlBase<any>;

    switch (key) {
      case 'crashYear':
        control = new CrashYearControl(value);
        break;

      case 'crashDate':
        control = new CrashDateControl(value);
        break;

      case 'crashTime':
        control = new CrashTimeControl(value);
        break;

      case 'onStreet':
        control = new OnStreetControl(value);
        break;

      case 'intersectingStreet':
        control = new IntersectingStreetControl(value);
        break;

      case 'offsetDistance':
        control = new OffsetDistanceControl(value);
        break;

      case 'offsetDirection':
        control = new OffsetDirectionControl(value);
        break;

      case 'city':
        control = new CityControl(value);
        break;

      case 'county':
        control = new CountyControl(value);
        break;

      case 'onPublicRoads':
        control = new OnPublicRoadsControl(value);
        break;

      case 'dotProperty':
        control = new DotPropertyControl(value);
        break;

      case 'siteLocation':
        control = new SiteLocationControl(value);
        break;

      case 'sideOfRoad':
        control = new SideOfRoadControl(value);
        break;

      case 'crashLane':
        control = new CrashLaneControl(value);
        break;

      case 'crashInjury':
        control = new CrashInjuryControl(value);
        break;

      case 'roadwaySystemId':
        control = new RoadwaySystemIdControl(value);
        break;

      case 'numberOfLanes':
        control = new NumberOfLanesControl(value);
        break;

      case 'ownership':
        control = new OwnershipControl(value);
        break;

      case 'routeSignage':
        control = new RouteSignageControl(value);
        break;

      case 'postedSpeedLimit':
        control = new PostedSpeedLimitControl(value);
        break;

      case 'functionalClass':
        control = new FunctionalClassControl(value);
        break;

      case 'bicyclistCount':
        control = new BicyclistCountControl(value);
        break;

      case 'pedestrianCount':
        control = new PedestrianCountControl(value);
        break;

      case 'comments':
        control = new CommentsControl(value);
        break;

      default:
        throw new Error(`${key} not found`);
    }

    // @ts-ignore
    return control;

  }
}
