import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlModelService} from "app/services/forms/crash-event/form-control-model.service";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";
import {FieldControlBase} from "app/models/form/controls/field-control-base";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'dgt-dot-property',
  templateUrl: '../templates/control.template.html',
})
export class DotPropertyComponent extends CrashEventRecordFieldBase<boolean> implements AfterViewInit, OnInit, OnValueChanged {
  @Input() controlModel: FieldControlBase<boolean>;
  @Input() form: FormGroup;

  constructor(
    public crashEvent: CrashEventService,
    protected controlModelService: FormControlModelService,
    protected formBuilder: FormBuilder
  ) {
    super(
      'dotProperty',
      crashEvent,
      controlModelService,
      formBuilder
    );
  }

  /**
   *
   */
  ngOnInit(): void {
    this.initNgForm();

    this.crashEvent.subscribeComponentToField(this, this.getFieldKey(), (v) => {
        this.setValue(v);
    }).then( /* partay */);

    this.crashEvent.subscribeComponentToField(this, 'onPublicRoads', (v) => {
      if (!v) {
        this.setValue(false);
      }
    }).then( /* partay */);

    this.crashEvent.subscribeComponentToField(this, 'siteLocation', (v) => {
      if (v in [9, 10, 11]) {
        this.setValue(false);
      }
    }).then( /* partay */);
  }



  /**
   *
   * @param $event
   */
  onValueChanged($event: Event): void {
    // @ts-ignore
    this.handleValueChange($event);

  }

  ngAfterViewInit(): void {
  }

}
