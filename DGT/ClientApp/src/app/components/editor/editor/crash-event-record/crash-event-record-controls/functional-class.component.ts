import { Component, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FunctionalClassControl} from "app/models/form/controls/crash-report/functional-class.control";

@Component({
  selector: 'dgt-functional-class',
  templateUrl: 'templates/control.template.html',
})
export class FunctionalClassComponent implements OnInit {
  constructor(public crashEventService: CrashEventService, public control: FunctionalClassControl) { }

  ngOnInit(): void {
  }

}
