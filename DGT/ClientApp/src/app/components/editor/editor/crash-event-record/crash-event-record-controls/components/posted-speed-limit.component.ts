import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlModelService} from "app/services/forms/crash-event/form-control-model.service";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";
import {FieldControlBase} from "app/models/form/controls/field-control-base";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'dgt-posted-speed-limit',
  templateUrl: '../templates/control.template.html',
})
export class PostedSpeedLimitComponent extends CrashEventRecordFieldBase<string> implements AfterViewInit, OnInit, OnValueChanged {
  @Input() controlModel: FieldControlBase<string>;
  @Input() form: FormGroup;
  @Input() show = false;

  constructor(
    public crashEvent: CrashEventService,
    protected controlModelService: FormControlModelService,
    protected formBuilder: FormBuilder
  ) {
    super(
      'postedSpeedLimit',
      crashEvent,
      controlModelService,
      formBuilder
    );
  }

  ngOnInit(): void {
    this.initNgForm();

    this.crashEvent.publicCrashFieldsAreEnabled$.subscribe((v) => {
      this.show = v;
    });

    this.crashEvent.subscribeComponentToFieldSubject(this, this.getFieldKey(), (v) => {
      this.setValue(v);
    }).then( /* partay */);

    this.crashEvent.subscribeComponentToFieldSubject(this, 'onPublicRoads', (v) => {
      const crashInjuryVal = this.crashEvent.getFieldValue('crashInjury');

      this.show = (v == 'false') && (crashInjuryVal == '5');
    }).then( /* partay */);
  }

  onValueChanged($event: Event): void {
    // @ts-ignore
    this.handleValueChange($event);
  }

  ngAfterViewInit(): void {
  }

}
