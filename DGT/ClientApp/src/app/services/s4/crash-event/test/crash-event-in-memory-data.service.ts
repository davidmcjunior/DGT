import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { CrashEventOptions } from 'app/models/crash-event/crash-event-options';
import { Geocoding } from 'app/models/crash-event/geocoding';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrashEventInMemoryDataService implements InMemoryDbService {
  private hsmvReportNumber: number;

  constructor() { }

  public getRecord(hsmvReportNumber: number): Observable<CrashEvent> {
    this.hsmvReportNumber = hsmvReportNumber;
    return of(this.createDb());
  }

  // eslint-disable-next-line
  createDb(): CrashEvent { // Observable<CrashEvent> {
    const opts: CrashEventOptions = {
      city: 'Gainesville',
      county: 'Alachua',
      crashDate: new Date('2019-07-16T19:20:30+01:00'),
      crashSeverity: 2,
      formType: 'L',
      hsmvReportNumber: this.hsmvReportNumber,
      intersectingStreetName: 'Buckman St.',
      offsetDirection: '',
      offsetDistance: 0,
      onStreetName: 'University Ave.',
      roadwaySystemId: 1,
      streetAddressNumber: 121,
      originalGeocoding: this.createGeocoding(this.hsmvReportNumber)
    };

    return new CrashEvent(opts);
  }

  private createGeocoding = (hsmvNum: number): Geocoding => {
    return {
      hsmvReportNumber: hsmvNum,
      author: '',
      centerlineX: 0,
      centerlineY: 0,
      crashSegmentId: '',
      createDate: undefined,
      etlGeoLocationStatus: 'Computer Tie',
      failReasonCode: '',
      lastUpdateDate: undefined,
      mapPointX: 120,
      mapPointY: 230,
      mapped: false,
      matchResultCode: 2,
      matchStatusCode: 'U',
      nearestIntersectionId: 'Bart',
      nearestIntersectionOffsetDirection: 'S',
      nearestIntersectionOffsetFeet: 10,
      onNetwork: false,
      relationShipToNetwork: 'Uncle'
    };
  }

}
