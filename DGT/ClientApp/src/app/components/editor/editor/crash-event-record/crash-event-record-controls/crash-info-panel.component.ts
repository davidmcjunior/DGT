import { Component, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FieldControlBase} from "app/models/form/controls/field-control-base";

@Component({
  selector: 'dgt-crash-info-panel',
  templateUrl: 'templates/crash-info-panel.template.html',
})
export class CrashInfoPanelComponent implements OnInit {
  constructor(public crashEventService: CrashEventService, public control: FieldControlBase<any>) { }

  ngOnInit(): void {
  }

}
