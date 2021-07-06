import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlModelService} from "app/services/forms/crash-event/form-control-model.service";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";
import {FieldControlBase} from "app/models/form/controls/field-control-base";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'dgt-road-system-id',
  templateUrl: '../templates/control.template.html'
})
export class RoadwaySystemIdComponent extends CrashEventRecordFieldBase implements AfterViewInit, OnInit, OnValueChanged {
  @Input('control') controlModel: FieldControlBase<number>;

  constructor(
    public crashEvent: CrashEventService,
    protected controlModelService: FormControlModelService,
    protected formBuilder: FormBuilder
  ) {
    super(
      'roadwaySystemId',
      crashEvent,
      controlModelService,
      formBuilder
    );
  }

  ngOnInit(): void {
    this.initNgForm();
    this.crashEvent.subscribeComponent(this);
  }

  onValueChanged($event: Event): void {
    // @ts-ignore
    this.handleValueChange($event);
  }

  ngAfterViewInit(): void {
  }

}
