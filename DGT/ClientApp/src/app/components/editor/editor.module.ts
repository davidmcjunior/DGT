import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from './editor/editor.component';
import { MapComponent } from './editor/map/map.component';
import { ReadonlyAttributesComponent } from './editor/attributes/readonly-attributes.component';
import { CrashEventRecordComponent } from './editor/crash-event-record/crash-event-record.component';
import { StatusBarComponent } from './editor/status-bar/status-bar.component';
import { ButtonsBarComponent } from './editor/buttons-bar/buttons-bar.component';
import { EditorRoutingModule } from './editor-routing.module';
import { TimePipe } from 'app/pipes/time.pipe';
import { GiveUpDialogComponent } from './editor/dialogs/give-up-dialog/give-up-dialog.component';
import { SearchComponent } from 'app/components/editor/editor/map/search/search.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SiteLocationComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/site-location.component";
import { CrashInfoPanelComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/crash-info-panel.component";
import { CrashInjuryComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/crash-injury.component";
import { CrashLaneComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/crash-lane.component";
import { DotPropertyComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/dot-property.component";
import { OnPublicRoadsComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/on-public-roads.component";
import { RoadwaySystemIdComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/roadway-system-id.component";
import { SideOfRoadComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/side-of-road.component";
import { BicyclistCountComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/bicyclist-count.component";
import { FunctionalClassComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/functional-class.component";
import { NumberOfLanesComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/number-of-lanes.component";
import { OwnershipComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/ownership.component";
import { PedestrianCountComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/pedestrian-count.component";
import { PostedSpeedLimitComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/posted-speed-limit.component";
import { RouteSignageComponent } from "app/components/editor/editor/crash-event-record/crash-event-record-controls/route-signage.component";


@NgModule({
  declarations: [
    EditorComponent,
    MapComponent,
    CrashEventRecordComponent,
    ReadonlyAttributesComponent,
    MapComponent,
    StatusBarComponent,
    ButtonsBarComponent,
    TimePipe,
    GiveUpDialogComponent,
    SearchComponent,
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
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorRoutingModule,
    AutocompleteLibModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class EditorModule {}
