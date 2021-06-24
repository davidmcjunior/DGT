import { Component, OnInit } from '@angular/core';
import {SideOfRoadControl} from "app/models/form/controls/crash-report/side-of-road.control";
import {CrashEventService} from "app/services/s4/crash-event.service";

@Component({
  selector: 'dgt-side-of-road',
  templateUrl: 'templates/control.template.html',
})
export class SideOfRoadComponent implements OnInit {
  constructor(public crashEventService: CrashEventService, public control: SideOfRoadControl) { }

  ngOnInit(): void {
  }

}
