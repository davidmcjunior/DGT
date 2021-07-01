import { Component, Inject, Injectable, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { environment } from 'environments/environment';
import { EditorQueueService } from 'app/services/s4/editor-queue.service';

@Injectable({
  providedIn: 'root', // EditorModule
})
export class CrashEventService {
  private _url = environment.s4.crashEventService.url;
  private _data: CrashEvent;
  private _cache: CrashEvent;

  public crashEvent$: Observable<CrashEvent>;
  public isLoaded = new BehaviorSubject<boolean>(false);

  public fields = {
    crashDate: new Subject<Date>(),
    onStreet: new Subject<string>(),
    intersectingStreet: new Subject<string>(),
    offsetDistance: new Subject<number>(),
    offsetDirection: new Subject<string>(),
    city: new Subject<string>(),
    county: new Subject<string>(),
    onPublicRoads: new Subject<string>(),
    dotProperty: new Subject<string>(),
    siteLocation: new Subject<number>(),
    sideOfRoad: new Subject<string>(),
    crashLane: new Subject<string>(),
    crashInjury: new Subject<number>(),
    roadwaySystemId: new Subject<number>(),
    numberOfLanes: new Subject<number>(),
    ownership: new Subject<string>(),
    routeSignage: new Subject<string>(),
    postedSpeedLimit: new Subject<string>(),
    functionalClass: new Subject<string>(),
    bicyclistCount: new Subject<number>(),
    pedestrianCount: new Subject<number>(),
  };

  constructor(private http: HttpClient, private workQueueService: EditorQueueService) {
    this._getRecord(10001).then(() => {
      this._subscribe();
    }).then(() => {
      this.crashEvent$ = new Subject<CrashEvent>();
    });

    console.log(this);
  }

  public getCurrentRecord(): CrashEvent {
    return this._data;
  }

  private async _getRecord(hsmvReportNumber: number): Promise<void> {
    await this.http.get<CrashEvent>(this._url + hsmvReportNumber).subscribe(response => {
      if (!this._cache) {
        this._cache = response;
      }
      this._data = response;
      this._initSubjects();
      this.crashEvent$ = of(this._data);
    });
  }

  private _handleError(error: Error): void {
    console.log(error);
  }

  private _subscribe(): void {
    for (let key in this.fields) {
      this.fields[key].subscribe({
        next: (val) => {
          this._data[key] = val;
        },
        error: (err) => {
          this._handleError(err);
        }
      });
    }
  }

  private _initSubjects(): void {
    for (let key in this.fields) {
      this.fields[key].next(this._data[key]);
    }
  }

}
