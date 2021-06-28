import {CommonModule} from "@angular/common";
import { Component, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";
import {FieldControlBase} from "app/models/form/controls/field-control-base";

@Component({
  selector: 'dgt-crash-info-panel',
  templateUrl: 'templates/crash-info-panel.template.html',
})
export class CrashInfoPanelComponent implements OnInit {
  public controlModel: FieldControlBase<any>;

  constructor(public crashEventService: CrashEventService, public controlFactory: FormControlFactory) {
    //this.controlModel = this.controlFactory.getControl('');
  }

  ngOnInit(): void {
  }

  onValueChanged($event: Event): void {
    //@ts-ignore
    const val = $event.target.value;
    this.crashEventService.updateFieldValue(this.controlModel.key, val);
  }

}
