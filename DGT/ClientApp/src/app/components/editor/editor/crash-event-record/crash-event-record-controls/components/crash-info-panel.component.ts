import {FormBuilder} from "@angular/forms";
import { Component, Input, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";
import {CrashEventRecordFieldBase, OnValueChanged} from "../crash-event-record-field-base";

@Component({
  selector: 'dgt-crash-info-panel',
  templateUrl: '../templates/crash-info-panel.template.html',
})
export class CrashInfoPanelComponent extends CrashEventRecordFieldBase implements OnInit {
  @Input('date') date: Date;
  @Input('onStreet') onStreet: string;
  @Input('intersectingStreet') intersectingStreet: string;
  @Input('offsetDistance') offsetDistance: number;
  @Input('direction') direction: string;
  @Input('city') city: string;
  @Input('county') county: string;

  constructor(
    public crashEventService: CrashEventService,
    public controlFactory: FormControlFactory
  ) {
    super();
  }

  ngOnInit(): void {
  }

}
