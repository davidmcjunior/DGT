import { Component, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {NumberOfLanesControl} from "app/models/form/controls/crash-report/number-of-lanes.control";

@Component({
  selector: 'dgt-number-of-lanes',
  templateUrl: 'templates/control.template.html',
})
export class NumberOfLanesComponent implements OnInit {
  constructor(public crashEventService: CrashEventService, public control: NumberOfLanesControl) { }

  ngOnInit(): void {
  }

}
