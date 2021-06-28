import {FormBuilder} from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";

@Component({
  selector: 'dgt-crash-info-panel',
  templateUrl: '../templates/crash-info-panel.template.html',
})
export class CrashInfoPanelComponent extends CrashEventRecordFieldBase implements OnInit, OnValueChanged {
    constructor(
    private formBuilder: FormBuilder,
    public crashEventService: CrashEventService,
    public controlFactory: FormControlFactory
  ) {
    super();
    this.controlModel = this.controlFactory.getControl('');
  }

  ngOnInit(): void {
      this.control = this.formBuilder.control('');
  }

  onValueChanged($event: Event): void {
  }

}
