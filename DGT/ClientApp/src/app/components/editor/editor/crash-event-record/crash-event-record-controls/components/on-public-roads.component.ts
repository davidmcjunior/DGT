import {FormBuilder} from "@angular/forms";
import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";

@Component({
  selector: 'dgt-on-public-roads',
  templateUrl: '../templates/control.template.html',
})
export class OnPublicRoadsComponent extends CrashEventRecordFieldBase implements AfterViewInit, OnInit, OnValueChanged
{
  @Input('value') value: string;

  constructor(
    public crashEvent: CrashEventService,
    public controlFactory: FormControlFactory
  ) {
    super();
    this.controlModel = this.controlFactory.getControl('onPublicRoads');
  }

  ngOnInit(): void {
    this.crashEvent.onPublicRoads.subscribe({
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
    this.crashEvent.onPublicRoads.next($event.target.value);
  }

  ngAfterViewInit(): void {
  }

}
