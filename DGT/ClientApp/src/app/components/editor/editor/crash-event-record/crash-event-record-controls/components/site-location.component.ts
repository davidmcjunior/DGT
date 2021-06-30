import {FormBuilder} from "@angular/forms";
import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";
import {Subscription} from "rxjs";

@Component({
  selector: 'dgt-site-location',
  templateUrl: '../templates/control.template.html',
})
export class SiteLocationComponent extends CrashEventRecordFieldBase implements AfterViewInit, OnInit, OnValueChanged
{
  @Input('value') value: number;
  private subscription: Subscription;

  constructor(
    public crashEvent: CrashEventService,
    public controlFactory: FormControlFactory
  ) {
    super();
    this.controlModel = this.controlFactory.getControl('siteLocation');
  }

  ngOnInit(): void {
    this.crashEvent.siteLocation.subscribe({
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
    this.crashEvent.siteLocation.next($event.target.value);
  }

  ngAfterViewInit(): void {
  }

}
