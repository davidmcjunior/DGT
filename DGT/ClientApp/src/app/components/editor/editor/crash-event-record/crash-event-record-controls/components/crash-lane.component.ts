import {FormBuilder} from "@angular/forms";
import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { CrashEventService } from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";

@Component({
  selector: 'dgt-crash-lane',
  templateUrl: '../templates/control.template.html',
})
export class CrashLaneComponent extends CrashEventRecordFieldBase implements AfterViewInit, OnInit, OnValueChanged
{
  @Input('value') value: string;

  constructor(
    public crashEventService: CrashEventService,
    public controlFactory: FormControlFactory
  ) {
    super();
    this.controlModel = this.controlFactory.getControl('crashLane');
  }

  ngOnInit(): void {
    this.subscribe();
  }

  onValueChanged($event: Event): void {
    //@ts-ignore
    const val = $event.target.value;
    this.crashEventService.updateFieldValue(this.controlModel.key, val);
  }

  ngAfterViewInit(): void {
  }

  private subscribe(): void {
    this.crashEventService
      .getField(this.controlModel.key)
      .subscribe((val: any) => this.value = val);
  }

}
