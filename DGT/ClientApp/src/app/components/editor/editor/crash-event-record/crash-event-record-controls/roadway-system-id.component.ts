import { Component, OnInit } from '@angular/core';
import {RoadwaySystemIdControl} from "app/models/form/controls/crash-report/roadway-system-id.control";
import {CrashEventService} from "app/services/s4/crash-event.service";

@Component({
  selector: 'dgt-road-system-id',
  templateUrl: 'templates/text.template.html',
})
export class RoadwaySystemIdComponent implements OnInit {
  constructor(private crashEventService: CrashEventService, public control:  RoadwaySystemIdControl) { }

  ngOnInit(): void {
  }

}
