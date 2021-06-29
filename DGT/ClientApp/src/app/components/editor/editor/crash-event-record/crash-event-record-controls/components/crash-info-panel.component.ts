import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {FormControlFactory} from "app/models/form/form-control-factory";

@Component({
  selector: 'dgt-crash-info-panel',
  templateUrl: '../templates/crash-info-panel.template.html',
})
export class CrashInfoPanelComponent implements OnInit {
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
    // this.crashEventService.getField('city').subscribe((val: string) => this.city = val);
    // this.crashEventService.getField('county').subscribe((val: string) => this.county = val);
    // this.crashEventService.getField('direction').subscribe((val: string) => this.direction = val);
    // this.crashEventService.getField('offsetDistance').subscribe((val: number) => this.offsetDistance = val);
    // this.crashEventService.getField('intersectingStreet').subscribe((val: string) => this.intersectingStreet = val);
    // this.crashEventService.getField('onStreet').subscribe((val: string) => this.onStreet = val);
    // this.crashEventService.getField('date').subscribe((val: Date) => this.date = val);
  }

  ngOnInit(): void {
  }

}
