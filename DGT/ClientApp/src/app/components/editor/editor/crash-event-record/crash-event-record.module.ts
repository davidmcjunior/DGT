import {NgModule} from "@angular/core";
import { SiteLocationComponent } from "./crash-event-record-controls/components/site-location.component";
import { CrashInfoPanelComponent } from "./crash-event-record-controls/components/crash-info-panel.component";
import { CrashInjuryComponent } from "./crash-event-record-controls/components/crash-injury.component";
import { CrashLaneComponent } from "./crash-event-record-controls/components/crash-lane.component";
import { DotPropertyComponent } from "./crash-event-record-controls/components/dot-property.component";
import { OnPublicRoadsComponent } from "./crash-event-record-controls/components/on-public-roads.component";
import { RoadwaySystemIdComponent } from "./crash-event-record-controls/components/roadway-system-id.component";
import { SideOfRoadComponent } from "./crash-event-record-controls/components/side-of-road.component";
import { BicyclistCountComponent } from "./crash-event-record-controls/components/bicyclist-count.component";
import { FunctionalClassComponent } from "./crash-event-record-controls/components/functional-class.component";
import { NumberOfLanesComponent } from "./crash-event-record-controls/components/number-of-lanes.component";
import { OwnershipComponent } from "./crash-event-record-controls/components/ownership.component";
import { PedestrianCountComponent } from "./crash-event-record-controls/components/pedestrian-count.component";
import { PostedSpeedLimitComponent } from "./crash-event-record-controls/components/posted-speed-limit.component";
import { RouteSignageComponent } from "./crash-event-record-controls/components/route-signage.component";
import { CrashEventRecordComponent } from "./crash-event-record.component";
import {CommonModule} from "@angular/common";

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
  imports: [
    CommonModule
  ]
})
export class CrashEventRecordModule {}
