import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { CrashEventService } from 'app/services/s4/crash-event.service';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { Observable } from 'rxjs';
import { MapComponent } from './map/map.component';
import { S4User } from 'app/models/s4-user';
import { UserService } from 'app/services/auth/user.service';
import { CrashEventRecordComponent } from "./crash-event-record/crash-event-record.component";
import {ReadonlyAttributesComponent} from "./attributes/readonly-attributes.component";
import {ButtonsBarComponent} from "./buttons-bar/buttons-bar.component";
import {StatusBarComponent} from "./status-bar/status-bar.component";

@Component({
  selector: 'dgt-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {
  @ViewChild(StatusBarComponent) titleBarComponent: StatusBarComponent;
  @ViewChild(MapComponent) mapComponent: MapComponent;
  @ViewChild(CrashEventRecordComponent) crashEventRecordComponent: CrashEventRecordComponent;
  @ViewChild(ReadonlyAttributesComponent) attributesComponent: ReadonlyAttributesComponent;
  @ViewChild(ButtonsBarComponent) buttonBarComponent: ButtonsBarComponent;

  // public currentRecord: CrashEvent;
  // public currentUser: Observable<S4User> | false;

  ngOnInit(): void {
    // this.currentUser = this.userService.getCurrentS4User();

    // this.currentRecord = this.dataService.nextRecord(1999234);
  }

}

