import {CommonModule} from "@angular/common";
import { Component, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";

@Component({
  selector: 'dgt-route-signage',
  templateUrl: '../templates/control.template.html',
})
export class RouteSignageComponent extends CrashEventRecordFieldBase implements OnInit, OnValueChanged {
  constructor(public crashEventService: CrashEventService, public controlFactory: FormControlFactory) {
    super();
    this.controlModel = this.controlFactory.getControl('routeSignage');
  }

  ngOnInit(): void {
  }

  onValueChanged($event: Event): void {
    //@ts-ignore
    const val = $event.target.value;
    this.crashEventService.updateFieldValue(this.controlModel.key, val);
  }

}
