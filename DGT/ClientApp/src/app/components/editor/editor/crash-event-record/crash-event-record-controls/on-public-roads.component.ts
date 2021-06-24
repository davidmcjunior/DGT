import { Component, OnInit } from '@angular/core';
import {OnPublicRoadsControl} from "app/models/form/controls/crash-report/on-public-roads.control";
import {CrashEventService} from "app/services/s4/crash-event.service";

@Component({
  selector: 'dgt-location-only',
  templateUrl: 'templates/text.template.html',
})
export class OnPublicRoadsComponent implements OnInit {
  constructor(private crashEventService: CrashEventService, public control: OnPublicRoadsControl) { }

  ngOnInit(): void {
  }

}
