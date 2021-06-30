import {FormBuilder} from "@angular/forms";
import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";

@Component({
  selector: 'dgt-pedestrian-count',
  templateUrl: '../templates/control.template.html',
})
export class PedestrianCountComponent extends CrashEventRecordFieldBase implements AfterViewInit, OnInit, OnValueChanged
{
  @Input('value') value: number;

  constructor(
    public crashEvent: CrashEventService,
    public controlFactory: FormControlFactory
  ) {
    super();
    this.controlModel = this.controlFactory.getControl('pedestrianCount');
  }

  ngOnInit(): void {
    this.crashEvent.pedestrianCount.subscribe({
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
    this.crashEvent.pedestrianCount.next($event.target.value);
  }

  ngAfterViewInit(): void {
  }

}
