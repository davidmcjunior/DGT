import {Injectable, OnInit} from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeocodeService implements OnInit {
  public mode$: BehaviorSubject<string>;
  public geocoding$: BehaviorSubject<any>;

  /**
   *
   * @param _http
   */
  constructor(private _http: HttpClient) {
    this.mode$ = new BehaviorSubject<string>('INTERSECTION');
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

    console.log(url);

    this._http.get<any>(url).subscribe(v => {
      this.geocoding$.next(v);
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
  ngOnInit(): void {
  }

}
