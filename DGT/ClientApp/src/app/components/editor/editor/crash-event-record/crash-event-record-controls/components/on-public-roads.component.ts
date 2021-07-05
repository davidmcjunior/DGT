import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlModelService} from "app/services/forms/crash-event/form-control-model.service";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";
import {FieldControlBase} from "app/models/form/controls/field-control-base";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'dgt-on-public-roads',
  templateUrl: '../templates/control.template.html',
})
export class OnPublicRoadsComponent extends CrashEventRecordFieldBase implements AfterViewInit, OnInit, OnValueChanged {
  @Input('control') controlModel: FieldControlBase<string>;

  constructor(
    public crashEvent: CrashEventService,
    public controlModelService: FormControlModelService,
    private formBuilder: FormBuilder
  ) {
    super();
    this.controlModel = this.controlModelService.getControl('onPublicRoads');
  }

  ngOnInit(): void {
    this.initNgForm(this.formBuilder);
    this.crashEvent.subscribeComponent(this);
  }

  onValueChanged($event: Event): void {
    // @ts-ignore
    this.crashEvent.getField(this.controlModel.key).next($event.target.value);
  }

  ngAfterViewInit(): void {
  }

}
