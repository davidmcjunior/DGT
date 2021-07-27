import {Injectable, OnInit} from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from "rxjs";
import {WatchableService} from "app/models/services/watchable-service";
import {CrashEventService} from "./crash-event.service";

@Injectable({
  providedIn: 'root'
})
export class GeocodeService extends WatchableService implements OnInit {
  public mode$: BehaviorSubject<string>;
  public geocoding$: BehaviorSubject<any>;


  /**
   *
   * @param _http
   * @param crashEvent
   */
  constructor(private _http: HttpClient, private crashEvent: CrashEventService) {
    super();
    this.mode$ = new BehaviorSubject<string>('SEGMENT');
    this.geocoding$ = new BehaviorSubject<any>(undefined);
  }

  /**
   *
   * @param lat
   * @param lng
   */
  public next(lat: number, lng: number): any {
    const configs = environment.s4.reverseGeocodeService;
    const url = configs.url + encodeURI(`${configs.key}/${lat}/${lng}/${configs.agency}/${this.mode$.getValue()}`);

    this._http.get<any>(url).subscribe(v => {
      console.log(v);
      this.geocoding$.next(v);
      this.crashEvent.getFieldSubject('onStreet')?.next(v.Location.NearestIntersectionName);
    });
  }

  /**
   *
   */
  public getNearestSegmentId(): number {
    return this.geocoding$.getValue().Location.NearestSegmentId;
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
