import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";

@Component({
  selector: 'dgt-crash-info-panel',
  templateUrl: '../templates/crash-info-panel.template.html',
})
export class CrashInfoPanelComponent implements OnInit, AfterViewInit {
  @Input('date') date: Date;
  @Input('onStreet') onStreet: string;
  @Input('intersectingStreet') intersectingStreet: string;
  @Input('offsetDistance') offsetDistance: number;
  @Input('direction') direction: string;
  @Input('city') city: string;
  @Input('county') county: string;

  constructor(
    public crashEvent: CrashEventService,
  ) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  private _initFields(): void {
    this.crashEvent['crashDate'].subscribe({
      next: (v) => this.date = v
    });
    this.crashEvent['city'].subscribe({
      next: (v) => this.city = v
    });
    this.crashEvent['county'].subscribe({
      next: (v) => this.county = v
    });
    this.crashEvent['onStreet'].subscribe({
      next: (v) => this.onStreet = v
    });
    this.crashEvent['intersectingStreet'].subscribe({
      next: (v) => this.intersectingStreet = v
    });
    this.crashEvent['offsetDistance'].subscribe({
      next: (v) => this.offsetDistance = v
    });
    this.crashEvent['offsetDirection'].subscribe({
      next: (v) => this.direction = v
    });
  }

}
