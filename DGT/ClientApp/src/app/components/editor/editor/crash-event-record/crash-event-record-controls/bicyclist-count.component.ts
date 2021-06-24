import { Component, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {BicyclistCountControl} from "app/models/form/controls/crash-report/bicyclist-count.control";

@Component({
  selector: 'dgt-bicyclist-count',
  templateUrl: 'templates/text.template.html',
})
export class BicyclistCountComponent implements OnInit {
  constructor(public crashEventService: CrashEventService, public control: BicyclistCountControl) { }

  ngOnInit(): void {
  }

}
