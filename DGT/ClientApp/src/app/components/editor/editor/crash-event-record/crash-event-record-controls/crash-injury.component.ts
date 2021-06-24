import { Component, OnInit } from '@angular/core';
import {CrashInjuryControl} from "app/models/form/controls/crash-report/crash-injury.control";
import {CrashEventService} from "app/services/s4/crash-event.service";

@Component({
  selector: 'dgt-crash-injury',
  templateUrl: 'templates/text.template.html',
})
export class CrashInjuryComponent implements OnInit {
  constructor(private crashEventService: CrashEventService, public control: CrashInjuryControl) { }

  ngOnInit(): void {
  }

}
