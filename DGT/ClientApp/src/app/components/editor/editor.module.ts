import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from './editor/editor.component';
import { MapComponent } from './editor/map/map.component';
import { ReadonlyAttributesComponent } from './editor/attributes/readonly-attributes.component';
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
import { CrashEventRecordModule } from "./editor/crash-event-record/crash-event-record.module";
import {BicyclistCountControl} from "../../models/form/controls/crash-report/bicyclist-count.control";
import {CityControl} from "../../models/form/controls/crash-report/city.control";


@NgModule({
  declarations: [
    EditorComponent,
    ReadonlyAttributesComponent,
    MapComponent,
    StatusBarComponent,
    ButtonsBarComponent,
    TimePipe,
    GiveUpDialogComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorRoutingModule,
    AutocompleteLibModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    CrashEventRecordModule
  ],
  providers: [
    BicyclistCountControl,
    CityControl
  ]
})
export class EditorModule {}