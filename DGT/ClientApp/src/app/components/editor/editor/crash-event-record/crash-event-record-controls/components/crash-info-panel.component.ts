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
    this.crashEvent.recordIsLoaded$.subscribe((isLoaded) => {
      if (isLoaded) {
        this._initFields();
      }
    });
  }

  ngAfterViewInit(): void {

  }

  private _initFields(): void {
    this.crashEvent.getFieldSubject('city')?.subscribe({
      next: (v) => { this.city = v; }
    });
    this.crashEvent.getFieldSubject('county')?.subscribe({
      next: (v) => { this.county = v; }
    });
    this.crashEvent.getFieldSubject('onStreet')?.subscribe({
      next: (v) => this.onStreet = v
    });
    this.crashEvent.getFieldSubject('intersectingStreet')?.subscribe({
      next: (v) => this.intersectingStreet = v
    });
    this.crashEvent.getFieldSubject('offsetDistance')?.subscribe({
      next: (v) => this.offsetDistance = v
    });
    this.crashEvent.getFieldSubject('offsetDirection')?.subscribe({
      next: (v) => this.direction = v
    });
  }

}
