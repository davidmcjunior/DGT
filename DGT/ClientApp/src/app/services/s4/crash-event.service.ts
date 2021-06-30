import { Component, Inject, Injectable, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject, Subscription} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { environment } from 'environments/environment';
import { EditorQueueService } from 'app/services/s4/editor-queue.service';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root', // EditorModule
})
export class CrashEventService {
  private _url = environment.s4.crashEventService.url;
  private _data: CrashEvent;
  private _cache: CrashEvent;

  public crashDate = new Subject<Date>();
  public onStreet = new Subject<string>();
  public intersectingStreet = new Subject<string>();
  public offsetDistance = new Subject<number>();
  public offsetDirection = new Subject<string>();
  public city = new Subject<string>();
  public county = new Subject<string>();
  public onPublicRoads = new Subject<string>();
  public dotProperty = new Subject<string>();
  public siteLocation = new Subject<number>();
  public sideOfRoad = new Subject<string>();
  public crashLane = new Subject<string>();
  public crashInjury = new Subject<number>();
  public roadwaySystemId = new Subject<number>();
  public numberOfLanes = new Subject<number>();
  public ownership = new Subject<string>();
  public routeSignage = new Subject<string>();
  public postedSpeedLimit = new Subject<string>();
  public functionalClass = new Subject<string>();
  public bicyclistCount = new Subject<number>();
  public pedestrianCount = new Subject<number>();
  public comments = new Subject<string>();

  constructor(private http: HttpClient, private workQueueService: EditorQueueService) {
    this._getRecord(10001);
    // setInterval(() => {
    //   console.log(this._data);
    // }, 5000);
  }

  private _getRecord(hsmvReportNumber: number): void {
    this.http.get<CrashEvent>(this._url + hsmvReportNumber).subscribe(response => {
      if (!this._cache) {
        this._cache = response;
      }
      this._data = response;
      this._initSubjects();
    });
  }

  private _subscribe(): void {
    this.crashLane.subscribe({
      next: (v) => { this._data.crashLane = v; },
      error: (err) => {}
    });
  }

  private _initSubjects(): void {
    this.crashLane.next(this._data.crashLane);
    this.onStreet.next(this._data.onStreet);
    this.intersectingStreet.next(this._data.intersectingStreet);
    this.offsetDirection.next(this._data.offsetDirection);
    this.offsetDistance.next(this._data.offsetDistance);
    this.city.next(this._data.city);
    this.county.next(this._data.county);
    this.onPublicRoads.next(this._data.onPublicRoads);
    this.dotProperty.next(this._data.fdotPropertyCode);
    this.siteLocation.next(this._data.siteLocation);
    this.sideOfRoad.next(this._data.sideOfRoad);
    this.crashLane.next(this._data.crashLane);
    this.crashInjury.next(this._data.crashSeverity);
    this.roadwaySystemId.next(this._data.roadwaySystemId);
    this.numberOfLanes.next(this._data.numberOfLanes);
    this.ownership.next(this._data.ownership);
    this.routeSignage.next(this._data.routeSignage);
    this.postedSpeedLimit.next(this._data.postedSpeedLimit);
    this.functionalClass.next(this._data.functionalClass);
    this.bicyclistCount.next(this._data.bicyclistCount);
    this.pedestrianCount.next(this._data.pedestrianCount);
    this.comments.next('');
  }

}
