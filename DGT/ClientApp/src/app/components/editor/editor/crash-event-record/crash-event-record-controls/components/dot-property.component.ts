import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";
import {FieldControlBase} from "app/models/form/controls/field-control-base";

@Component({
  selector: 'dgt-dot-property',
  templateUrl: '../templates/control.template.html',
})
export class DotPropertyComponent extends CrashEventRecordFieldBase implements AfterViewInit, OnInit, OnValueChanged {
  @Input('control') controlModel: FieldControlBase<string>;

  constructor(
    public crashEvent: CrashEventService,
    public controlFactory: FormControlFactory
  ) {
    super();
    this.controlModel = this.controlFactory.getControl('dotProperty');
  }

  ngOnInit(): void {
    this.subscribe(this.crashEvent);
  }

  onValueChanged($event: Event): void {
    // @ts-ignore
    this.crashEvent.fields[this.controlModel.key].next($event.target.value);
  }

  ngAfterViewInit(): void {
  }

}
