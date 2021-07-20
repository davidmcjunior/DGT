import {Injectable, OnInit} from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReverseGeocodeService implements OnInit {
  public mode$: BehaviorSubject<string>;
  public geocoding$: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.mode$ = new BehaviorSubject<string>('INTERSECTION');
    this.geocoding$ = new BehaviorSubject<any>(undefined);
  }

  public getGeocoding(lat: number, lng: number): any {
    const configs = environment.s4.reverseGeocodeService;
    const url = configs.url + encodeURI(`${configs.key}/${lat}/${lng}/${configs.agency}/${this.mode$.getValue()}`);

    this.http.get<any>(url).subscribe(v => {
      this.geocoding$.next(v);
      console.log(v);
    });
  }

  public getNearestSegmentId(): number {
    return this.geocoding$.getValue().Location.NearestSegmentId;
  }

  ngOnInit(): void {
    // this.mode$ = new BehaviorSubject<string>('INTERSECTION');
    // this.geocoding$ = new Subject<any>();
  }

}
