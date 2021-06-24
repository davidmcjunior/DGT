import { Component, OnInit } from '@angular/core';
import {DotPropertyControl} from "app/models/form/controls/crash-report/dot-property.control";
import {CrashEventService} from "app/services/s4/crash-event.service";

@Component({
  selector: 'dgt-dot-property',
  templateUrl: 'templates/control.template.html',
})
export class DotPropertyComponent implements OnInit {
  constructor(public crashEventService: CrashEventService, public control: DotPropertyControl) { }

  ngOnInit(): void {
  }

}
