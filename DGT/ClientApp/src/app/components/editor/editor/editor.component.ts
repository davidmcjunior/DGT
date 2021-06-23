import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { CrashEventService } from 'app/services/s4/crash-event.service';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { Observable } from 'rxjs';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { MapComponent } from './map/map.component';
import { ReadonlyAttributesComponent } from './attributes/readonly-attributes.component';
import { ButtonsBarComponent } from './buttons-bar/buttons-bar.component';
import { S4User } from 'app/models/s4-user';
import { UserService } from 'app/services/auth/user.service';

@Component({
  selector: 'dgt-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @ViewChild(StatusBarComponent) titleBarComponent: StatusBarComponent;
  @ViewChild(MapComponent) mapComponent: MapComponent;
  @ViewChild(StatusBarComponent) crashEventRecordComponent: StatusBarComponent;
  @ViewChild(ReadonlyAttributesComponent) attributesComponent: ReadonlyAttributesComponent;
  @ViewChild(ButtonsBarComponent) buttonBarComponent: ButtonsBarComponent;

  public currentRecord: CrashEvent;
  public currentUser: Observable<S4User> | false;
  public dataService: CrashEventService;


  constructor(recordService: CrashEventService, private userService: UserService) {
    this.dataService = recordService;
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentS4User();
    console.log(this.dataService.nextRecord(1999234));

    this.dataService.nextRecord(1999234).subscribe(
      (response: CrashEvent) => this.currentRecord = response
    );
  }

}

