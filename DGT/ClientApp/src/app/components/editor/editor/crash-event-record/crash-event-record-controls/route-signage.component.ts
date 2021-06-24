import { Component, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {RouteSignageControl} from "app/models/form/controls/crash-report/route-signage.control";

@Component({
  selector: 'dgt-route-signage',
  templateUrl: 'templates/control.template.html',
})
export class RouteSignageComponent implements OnInit {
  constructor(public crashEventService: CrashEventService, public control: RouteSignageControl) { }

  ngOnInit(): void {
  }

}
