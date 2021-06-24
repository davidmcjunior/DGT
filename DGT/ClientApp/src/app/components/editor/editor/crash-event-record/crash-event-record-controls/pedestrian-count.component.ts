import { Component, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {PedestrianCountControl} from "app/models/form/controls/crash-report/pedestrian-count.control";

@Component({
  selector: 'dgt-pedestrian-count',
  templateUrl: 'templates/control.template.html',
})
export class PedestrianCountComponent implements OnInit {
  constructor(public crashEventService: CrashEventService, public control: PedestrianCountControl) { }

  ngOnInit(): void {
  }

}
