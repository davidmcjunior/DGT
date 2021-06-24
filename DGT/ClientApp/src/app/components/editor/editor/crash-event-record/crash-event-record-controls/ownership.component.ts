import { Component, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {OwnershipControl} from "app/models/form/controls/crash-report/ownership.control";

@Component({
  selector: 'dgt-ownership',
  templateUrl: 'templates/control.template.html',
})
export class OwnershipComponent implements OnInit {
  constructor(public crashEventService: CrashEventService, public control: OwnershipControl) { }

  ngOnInit(): void {
  }

}
