import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlModelService} from "app/services/forms/crash-event/form-control-model.service";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";
import {FieldControlBase} from "app/models/form/controls/field-control-base";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CR} from "@angular/compiler/src/i18n/serializers/xml_helper";

@Component({
  selector: 'dgt-number-of-lanes',
  templateUrl: '../templates/control.template.html',
})
export class NumberOfLanesComponent extends CrashEventRecordFieldBase<number> implements AfterViewInit, OnInit, OnValueChanged {
  @Input() controlModel: FieldControlBase<number>;
  @Input() form: FormGroup;

  constructor(
    public crashEvent: CrashEventService,
    protected controlModelService: FormControlModelService,
    protected formBuilder: FormBuilder
  ) {
    super(
      'numberOfLanes',
      crashEvent,
      controlModelService,
      formBuilder
    );
  }

  ngOnInit(): void {
    this.initNgForm();

    this.crashEvent.subscribeComponentToField(this, this.getFieldKey(), (v) => {
      this.setValue(v);
    }).then( /* partay */);

    this.crashEvent.subscribeComponentToField(this, 'sideOfRoad', (v) => {
      if (v == 'U') {
        this.setValue(6);
      }
    }).then( /* partay */);
  }

  onValueChanged($event: Event): void {
    // @ts-ignore
    this.handleValueChange($event);
  }

  ngAfterViewInit(): void {
  }

}
