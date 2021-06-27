import {CommonModule} from "@angular/common";
import { Component, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";
import {FieldControlBase} from "app/models/form/controls/field-control-base";

@Component({
  selector: 'dgt-road-system-id',
  templateUrl: 'templates/control.template.html',
})
export class RoadwaySystemIdComponent implements OnInit {
  public control: FieldControlBase<any>;

  constructor(public crashEventService: CrashEventService, public controlFactory: FormControlFactory) {
    this.control = this.controlFactory.getControl('roadwaySystemId');
  }

  ngOnInit(): void {
  }

  onValueChanged($event: Event): void {
  }

}
