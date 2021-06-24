import { Component, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {PostedSpeedLimitControl} from "app/models/form/controls/crash-report/posted-speed-limit.control";

@Component({
  selector: 'dgt-posted-speed-limit',
  templateUrl: 'templates/control.template.html',
})
export class PostedSpeedLimitComponent implements OnInit {
  constructor(public crashEventService: CrashEventService, public control: PostedSpeedLimitControl) { }

  ngOnInit(): void {
  }

}
