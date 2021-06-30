import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";
import {FieldControlBase} from "app/models/form/controls/field-control-base";

@Component({
  selector: 'dgt-functional-class',
  templateUrl: '../templates/control.template.html',
})
export class FunctionalClassComponent extends CrashEventRecordFieldBase implements AfterViewInit, OnInit, OnValueChanged {
  @Input('control') controlModel: FieldControlBase<string>;

  constructor(
    public crashEvent: CrashEventService,
    public controlFactory: FormControlFactory
  ) {
    super();
    this.controlModel = this.controlFactory.getControl('functionalClass');
  }

  ngOnInit(): void {
    this.crashEvent.functionalClass.subscribe({
      next: (v) => {
        this.setInitValIf(v);
        this.controlModel.value = v;
        console.log(`Updated to ${v}`);
      },
      error: (err) => {
        console.log(`Error: ${this.controlModel.key} value was not set`);
      }
    });
  }

  onValueChanged($event: Event): void {
    // @ts-ignore
    this.crashEvent.functionalClass.next($event.target.value);
  }

  ngAfterViewInit(): void {
  }

}
