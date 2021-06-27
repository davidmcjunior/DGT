import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SiteLocationComponent} from "./crash-event-record-controls/site-location.component";
import {BicyclistCountComponent} from "./crash-event-record-controls/bicyclist-count.component";
import {CrashInfoPanelComponent} from "./crash-event-record-controls/crash-info-panel.component";
import {CrashInjuryComponent} from "./crash-event-record-controls/crash-injury.component";
import {CrashLaneComponent} from "./crash-event-record-controls/crash-lane.component";
import {DotPropertyComponent} from "./crash-event-record-controls/dot-property.component";
import {FunctionalClassComponent} from "./crash-event-record-controls/functional-class.component";
import {NumberOfLanesComponent} from "./crash-event-record-controls/number-of-lanes.component";
import {OnPublicRoadsComponent} from "./crash-event-record-controls/on-public-roads.component";
import {OwnershipComponent} from "./crash-event-record-controls/ownership.component";
import {PedestrianCountComponent} from "./crash-event-record-controls/pedestrian-count.component";
import {PostedSpeedLimitComponent} from "./crash-event-record-controls/posted-speed-limit.component";
import {RoadwaySystemIdComponent} from "./crash-event-record-controls/roadway-system-id.component";
import {RouteSignageComponent} from "./crash-event-record-controls/route-signage.component";
import {SideOfRoadComponent} from "./crash-event-record-controls/side-of-road.component";

@Component({
  selector: 'dgt-crash-event-record',
  templateUrl: './crash-event-record.component.html'
})
export class CrashEventRecordComponent implements OnInit {
  @ViewChild(SiteLocationComponent) siteLocation: SiteLocationComponent;
  @ViewChild(BicyclistCountComponent) bicycleCount: BicyclistCountComponent;
  @ViewChild(CrashInfoPanelComponent) crashInfoPanel: CrashInfoPanelComponent;
  @ViewChild(CrashInjuryComponent) crashInjury: CrashInjuryComponent;
  @ViewChild(CrashLaneComponent) crashLane: CrashLaneComponent;
  @ViewChild(DotPropertyComponent) dotProperty: DotPropertyComponent;
  @ViewChild(FunctionalClassComponent) functionalClass: FunctionalClassComponent;
  @ViewChild(NumberOfLanesComponent) numberOfLanes: NumberOfLanesComponent;
  @ViewChild(OnPublicRoadsComponent) onPublicRoads: OnPublicRoadsComponent;
  @ViewChild(OwnershipComponent) ownership: OwnershipComponent;
  @ViewChild(PedestrianCountComponent) pedestrianCount: PedestrianCountComponent;
  @ViewChild(PostedSpeedLimitComponent) postedSpeedLimit: PostedSpeedLimitComponent;
  @ViewChild(RoadwaySystemIdComponent) roadwaySystemId: RoadwaySystemIdComponent;
  @ViewChild(RouteSignageComponent) routeSignage: RouteSignageComponent;
  @ViewChild(SideOfRoadComponent) sideOfRoad: SideOfRoadComponent;

  ngOnInit(): void {}

}
