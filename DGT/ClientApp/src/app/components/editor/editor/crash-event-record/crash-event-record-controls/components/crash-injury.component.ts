import {FormBuilder} from "@angular/forms";
import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";

@Component({
  selector: 'dgt-crash-injury',
  templateUrl: '../templates/control.template.html',
})
export class CrashInjuryComponent extends CrashEventRecordFieldBase implements AfterViewInit, OnInit, OnValueChanged {
  @Input('value') value: number;

  constructor(
    public crashEvent: CrashEventService,
    public controlFactory: FormControlFactory
  ) {
    super();
    console.log('CrashInjury');
    this.controlModel = this.controlFactory.getControl('crashInjury');
  }

  ngOnInit(): void {
    this.crashEvent.crashInjury.subscribe({
      next: (v) => {
        this.value = v;
      },
      error: (err) => {
        console.log(`Error: ${this.controlModel.key} value was not set`);
      }
    });
  }

  onValueChanged($event: Event): void {
    // @ts-ignore
    this.crashEvent.crashInjury.next($event.target.value);
  }

  ngAfterViewInit(): void {
  }

}
