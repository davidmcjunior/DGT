import {Injectable, OnInit} from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {WatchableService} from "app/models/services/watchable-service";
import {CrashEventService} from "./crash-event.service";
import * as mapboxgl from 'mapbox-gl';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeocodeService extends WatchableService implements OnInit {
  public mode$: BehaviorSubject<string>;
  public modeActive$: BehaviorSubject<boolean>;
  public geocoding$: BehaviorSubject<any>;


  /**
   *
   * @param _http
   * @param crashEvent
   */
  constructor(private _http: HttpClient, private crashEvent: CrashEventService) {
    super();
    this.mode$ = new BehaviorSubject<string>('');
    this.geocoding$ = new BehaviorSubject<any>(undefined);
    this.modeActive$ = new BehaviorSubject<boolean>(false);
  }

  /**
   *
   * @param lat
   * @param lng
   */
  public next(lat: number, lng: number): any {
    if (this.mode$.value === '') { return; }
    const configs = environment.s4.reverseGeocodeService;
    const url = configs.url + encodeURI(`${configs.key}/${lat}/${lng}/${configs.agency}/${this.mode$.getValue()}`);

    return this._http.get<any>(url).pipe(map( (v) => {
      console.log(v);
      this.geocoding$.next(v);
      this.crashEvent.getFieldSubject('onStreet')?.next(v.Location.StreetName);
      this.crashEvent.getFieldSubject('intersectingStreet')?.next(v.Location.NearestIntersectingStreetName);
      return v;
    }));
  }

  /**
   *
   */
  public getNearestSegmentId(point: mapboxgl.LngLat): Observable<number> {
    const geocoding = this.geocoding$.value;
    let currentSegment: number | undefined;
    if(geocoding && geocoding.Location && geocoding.Location.NearestSegmentId){
      currentSegment = geocoding.Location.NearestSegmentId;
    }
    return this.next(point.lat, point.lng).pipe(map((v: any) => {
      const segId = v.Location.NearestSegmentId;
      console.log(currentSegment, segId);
      return segId;
    }));
  }

  /**
   *
   */
  public getNearestIntersectingStreetName(): string {
    return this.geocoding$.getValue().Location.NearestIntersectingStreetName;
  }

  /**
   *
   */
  public getNearestIntersectionName(): string {
    return this.geocoding$.getValue().Location.NearestIntersectionName;
  }

  /**
   *
   */
  ngOnInit(): void {
  }

}
