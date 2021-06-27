import {NgModule} from "@angular/core";
import { SiteLocationComponent } from "./crash-event-record-controls/site-location.component";
import { CrashInfoPanelComponent } from "./crash-event-record-controls/crash-info-panel.component";
import { CrashInjuryComponent } from "./crash-event-record-controls/crash-injury.component";
import { CrashLaneComponent } from "./crash-event-record-controls/crash-lane.component";
import { DotPropertyComponent } from "./crash-event-record-controls/dot-property.component";
import { OnPublicRoadsComponent } from "./crash-event-record-controls/on-public-roads.component";
import { RoadwaySystemIdComponent } from "./crash-event-record-controls/roadway-system-id.component";
import { SideOfRoadComponent } from "./crash-event-record-controls/side-of-road.component";
import { BicyclistCountComponent } from "./crash-event-record-controls/bicyclist-count.component";
import { FunctionalClassComponent } from "./crash-event-record-controls/functional-class.component";
import { NumberOfLanesComponent } from "./crash-event-record-controls/number-of-lanes.component";
import { OwnershipComponent } from "./crash-event-record-controls/ownership.component";
import { PedestrianCountComponent } from "./crash-event-record-controls/pedestrian-count.component";
import { PostedSpeedLimitComponent } from "./crash-event-record-controls/posted-speed-limit.component";
import { RouteSignageComponent } from "./crash-event-record-controls/route-signage.component";
import { CrashEventRecordComponent } from "./crash-event-record.component";

const classList = [
  CrashEventRecordComponent,
  SiteLocationComponent,
  CrashInfoPanelComponent,
  CrashInjuryComponent,
  CrashLaneComponent,
  DotPropertyComponent,
  OnPublicRoadsComponent,
  RoadwaySystemIdComponent,
  SideOfRoadComponent,
  BicyclistCountComponent,
  FunctionalClassComponent,
  NumberOfLanesComponent,
  OwnershipComponent,
  PedestrianCountComponent,
  PostedSpeedLimitComponent,
  RouteSignageComponent
];

@NgModule({
  declarations: classList,
  exports: classList,
  imports: []
})
export class CrashEventRecordModule {}
