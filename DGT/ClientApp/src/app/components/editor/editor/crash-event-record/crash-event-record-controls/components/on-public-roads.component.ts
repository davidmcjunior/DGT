import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlModelService} from "app/services/forms/crash-event/form-control-model.service";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";
import {FieldControlBase} from "app/models/form/controls/field-control-base";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'dgt-on-public-roads',
  templateUrl: '../templates/control.template.html',
})
export class OnPublicRoadsComponent extends CrashEventRecordFieldBase<boolean> implements AfterViewInit, OnInit, OnValueChanged {
  @Input() controlModel: FieldControlBase<boolean>;
  @Input() form: FormGroup;
  @Input() show = true;

  constructor(
    public crashEvent: CrashEventService,
    protected controlModelService: FormControlModelService,
    protected formBuilder: FormBuilder
  ) {
    super(
      'onPublicRoads',
      crashEvent,
      controlModelService,
      formBuilder
    );
  }

  ngOnInit(): void {
    this.initNgForm();

    this.crashEvent.subscribeToFieldSubject(this.getFieldKey(), (v) => {
      this.setValue(v);
    }).then( /* partay */);
  }

  onValueChanged($event: Event): void {
    // @ts-ignore
    this.handleValueChange($event);
  }

  ngAfterViewInit(): void {
  }

}
