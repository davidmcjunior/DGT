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

  public crashEvent$: Observable<CrashEvent>;

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
    this.crashEvent$ = of(this._data);
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

  private _handleError(error: Error): void {
    console.log(error);
  }

  private _subscribe(): void {
    this.crashLane.subscribe({
      next: (val) => {
        this._data.crashLane = val;
      }
    });

    this.onStreet.subscribe({
        next: (val) => { this._data.onStreet = val; },
        error: (err) => { this._handleError(err); }
    });

    this.intersectingStreet.subscribe({
      next: (val) => { this._data.intersectingStreet = val; },
      error: (err) => { this._handleError(err); }
    });

    this.offsetDirection.subscribe({
      next: (val) => { this._data.offsetDirection = val; },
      error: (err) => { this._handleError(err); }
    });

    this.offsetDistance.subscribe({
      next: (val) => { this._data.offsetDistance = val; },
      error: (err) => { this._handleError(err); }
    });

    this.city.subscribe({
      next: (val) => { this._data.city = val; },
      error: (err) => { this._handleError(err); }
    });

    this.county.subscribe({
      next: (val) => { this._data.county = val; },
      error: (err) => { this._handleError(err); }
    });

    this.onPublicRoads.subscribe({
      next: (val) => { this._data.onPublicRoads = val; },
      error: (err) => { this._handleError(err); }
    });

    this.dotProperty.subscribe({
      next: (val) => { this._data.fdotPropertyCode = val; },
      error: (err) => { this._handleError(err); }
    });

    this.siteLocation.subscribe({
      next: (val) => { this._data.siteLocation = val; },
      error: (err) => { this._handleError(err); }
    });

    this.sideOfRoad.subscribe({
      next: (val) => { this._data.sideOfRoad = val; },
      error: (err) => { this._handleError(err); }
    });

    this.crashLane.subscribe({
      next: (val) => { this._data.crashLane = val; },
      error: (err) => { this._handleError(err); }
    });

    this.crashInjury.subscribe({
      next: (val) => { this._data.crashSeverity = val; },
      error: (err) => { this._handleError(err); }
    });

    this.roadwaySystemId.subscribe({
      next: (val) => { this._data.roadwaySystemId = val; },
      error: (err) => { this._handleError(err); }
    });

    this.numberOfLanes.subscribe({
      next: (val) => { this._data.numberOfLanes = val; },
      error: (err) => { this._handleError(err); }
    });

    this.ownership.subscribe({
      next: (val) => { this._data.ownership = val; },
      error: (err) => { this._handleError(err); }
    });

    this.routeSignage.subscribe({
      next: (val) => { this._data.routeSignage = val; },
      error: (err) => { this._handleError(err); }
    });

    this.postedSpeedLimit.subscribe({
      next: (val) => { this._data.postedSpeedLimit = val; },
      error: (err) => { this._handleError(err); }
    });

    this.functionalClass.subscribe({
      next: (val) => { this._data.functionalClass = val; },
      error: (err) => { this._handleError(err); }
    });

    this.bicyclistCount.subscribe({
      next: (val) => { this._data.bicyclistCount = val; },
      error: (err) => { this._handleError(err); }
    });

    this.pedestrianCount.subscribe({
      next: (val) => { this._data.pedestrianCount = val; },
      error: (err) => { this._handleError(err); }
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
