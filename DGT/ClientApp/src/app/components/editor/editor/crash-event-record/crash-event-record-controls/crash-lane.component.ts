import { Component, OnInit } from '@angular/core';
import {CrashLaneControl} from "app/models/form/controls/crash-report/crash-lane.control";
import {CrashEventService} from "app/services/s4/crash-event.service";

@Component({
  selector: 'dgt-crash-lane',
  templateUrl: 'templates/select.template.html',
})
export class CrashLaneComponent implements OnInit {
  constructor(public crashEventService: CrashEventService, public control: CrashLaneControl) { }

  ngOnInit(): void {
  }

}
