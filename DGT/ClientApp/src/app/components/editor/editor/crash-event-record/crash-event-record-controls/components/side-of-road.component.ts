import {FormBuilder} from "@angular/forms";
import { Component, Input, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";

@Component({
  selector: 'dgt-side-of-road',
  templateUrl: '../templates/control.template.html',
})
export class SideOfRoadComponent extends CrashEventRecordFieldBase implements OnInit, OnValueChanged {
    @Input('value') value: any;

  constructor(
    private formBuilder: FormBuilder,
    public crashEventService: CrashEventService,
    public controlFactory: FormControlFactory
  ) {
    super();
    this.controlModel = this.controlFactory.getControl('sideOfRoad');
  }

  ngOnInit(): void {
    const initialVal = this.crashEventService.getFieldValue(this.controlModel.key);
    this.control = this.formBuilder.control(initialVal);
  }

  onValueChanged($event: Event): void {
    //@ts-ignore
    const val = $event.target.value;
    this.crashEventService.updateFieldValue(this.controlModel.key, val);
  }

}
