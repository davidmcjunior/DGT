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

  @Input('ogDate') ogDate: Date;
  @Input('ogOnStreet') ogOnStreet = '';
  @Input('ogIntersectingStreet') ogIntersectingStreet = '';
  @Input('ogOffsetDistance') ogOffsetDistance = '';
  @Input('ogDirection') ogDirection = '';
  @Input('ogCity') ogCity =  '';
  @Input('ogCounty') ogCounty = '';

  _ogCity = '';
  _ogCounty = '';
  _ogOnStreet = '';
  _ogIntersectingStreet = '';
  _ogOffsetDistance = '';
  _ogDirection = '';


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
    this.onStreet = '';
  }

  private _initFields(): void {
    this.crashEvent.getFieldSubject('city')?.subscribe({
      next: (v) => { this.city = v.toUpperCase(); }
    });
    this.crashEvent.getFieldSubject('county')?.subscribe({
      next: (v) => { this.county = v.toUpperCase(); }
    });
    this.crashEvent.getFieldSubject('onStreet')?.subscribe({
      next: (v) => {
        this.onStreet = v.toUpperCase();

        if (v !== this._ogOnStreet) {
          this.ogOnStreet = this._ogOnStreet;
        }
        else {
          this.onStreet = '.';
        }
      }
    });
    this.crashEvent.getFieldSubject('intersectingStreet')?.subscribe({
      next: (v) => {
        this.intersectingStreet = v.toUpperCase();

        if (v !== this._ogIntersectingStreet) {
          this.ogIntersectingStreet = this._ogIntersectingStreet;
        }
        else {
          this.ogIntersectingStreet = '.';
        }
      }
    });
    this.crashEvent.getFieldSubject('offsetDistance')?.subscribe({
      next: (v) => {
        this.offsetDistance = v;

        if (v !== this._ogIntersectingStreet) {
          this.ogOffsetDistance = this._ogOffsetDistance;
        }
        else {
          this.ogOffsetDistance = '.';
        }
      }
    });
    this.crashEvent.getFieldSubject('offsetDirection')?.subscribe({
      next: (v) => {
        this.direction = v.toUpperCase();

        if (v !== this._ogDirection) {
          this.ogDirection = this._ogDirection;
        }
        else {
          this.ogDirection = '.';
        }
      }
    });

    this._ogCity = this.crashEvent.getFieldValue('city');
    this._ogCounty = this.crashEvent.getFieldValue('county');
    this._ogOnStreet = this.crashEvent.getFieldValue('onStreet');
    this._ogIntersectingStreet = this.crashEvent.getFieldValue('intersectingStreet');
    this._ogOffsetDistance = this.crashEvent.getFieldValue('offsetDistance');
    this._ogDirection = this.crashEvent.getFieldValue('offsetDirection');
  }

}
