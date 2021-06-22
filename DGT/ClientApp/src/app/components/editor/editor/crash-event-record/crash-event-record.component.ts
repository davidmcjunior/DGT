import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { FormControlCreationService } from 'app/services/forms/crash-event/form-control-creation.service';
import { FieldControlBase } from 'app/models/form/controls/field-control-base';
import { CrashDateControl } from 'app/models/form/controls/crash-report/crash-date.control';

@Component({
  selector: 'dgt-crash-event-record',
  templateUrl: './crash-event-record.component.html',
  styleUrls: ['./crash-event-record.component.scss'],
  providers: [ FormControlCreationService ]
})
export class CrashEventRecordComponent implements OnInit {
  @Input() currentRecord: CrashEvent;

  public form: FormGroup;
  public payload = '';

  constructor(
    private formControlCreationService: FormControlCreationService,
  ) {}

  ngOnInit(): void {
    this.initForm(this.currentRecord);
  }

  public onUpdate(event: {sender: string, value: any}): void {

  }

  onSubmit(): void {}

  private initForm(crashEvent: CrashEvent): void {
    this.form = this.formControlCreationService.getControls([
      {key: 'crashYear',          value: crashEvent.crashDate.getFullYear()},
      {key: 'crashDate',          value: this.getMonthAndDay(crashEvent.crashDate)},
      {key: 'crashTime',          value: crashEvent.crashDate.getHours()},
      {key: 'onStreet',           value: crashEvent.onStreetName},
      {key: 'intersectingStreet', value: crashEvent.intersectingStreetName},
      {key: 'offsetDistance',     value: crashEvent.offsetDistance},
      {key: 'offsetDirection',    value: crashEvent.offsetDirection},
      {key: 'city',               value: crashEvent.city},
      {key: 'county',             value: crashEvent.county},
      {key: 'siteLocation',       value: ''},
      {key: 'dotProperty',        value: ''},
      {key: 'onPublicRoads',      value: ''},
      {key: 'sideOfRoad',         value: ''},
      {key: 'crashLane',          value: ''},
      {key: 'roadwaySystemId',    value: ''},
      {key: 'crashInjury',        value: ''},
      {key: 'bicyclistCount',     value: ''},
      {key: 'pedestrianCount',    value: ''},
      {key: 'postedSpeedLimit',   value: ''},
      {key: 'numberOfLanes',      value: ''},
      {key: 'ownership',          value: ''},
      {key: 'functionalClass',    value: ''},
      {key: 'routeSignage',       value: ''},
      {key: 'comments',           value: ''}
    ]);
  }

  private getMonthAndDay = (date: Date): string =>
    `${(CrashDateControl.Months.find(m => m.key === date.getMonth()))?.value} ${date.getDate()}`

}
