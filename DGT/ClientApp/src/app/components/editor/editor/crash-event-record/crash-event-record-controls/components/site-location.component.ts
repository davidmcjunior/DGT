import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";
import {FieldControlBase} from "app/models/form/controls/field-control-base";

@Component({
  selector: 'dgt-site-location',
  templateUrl: '../templates/control.template.html',
})
export class SiteLocationComponent extends CrashEventRecordFieldBase implements AfterViewInit, OnInit, OnValueChanged {
  @Input('control') controlModel: FieldControlBase<number>;

  constructor(
    public crashEvent: CrashEventService,
    public controlFactory: FormControlFactory
  ) {
    super();
    this.controlModel = this.controlFactory.getControl('siteLocation');
  }

  ngOnInit(): void {
    this.subscribe(this.crashEvent);
  }

  onValueChanged($event: Event): void {
    // @ts-ignore
    const val = $event.target.value;
    this.crashEvent.fields[this.controlModel.key].next(val);
  }

  ngAfterViewInit(): void {
  }

}
