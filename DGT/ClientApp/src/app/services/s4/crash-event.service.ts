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
  private _crashEvent: CrashEvent;

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
    this.getRecord(10001);
  }

  private getRecord(hsmvReportNumber: number): void {
    this.http.get<CrashEvent>(this._url + hsmvReportNumber).subscribe(response => {
      this._crashEvent = response;
      this.setSubjects(response);
    });
  }

  private setSubjects(ce: CrashEvent) {
    this.crashLane.next(ce.crashLane);
    this.onStreet.next(ce.onStreet);
    this.intersectingStreet.next(ce.intersectingStreet);
    this.offsetDirection.next(ce.offsetDirection);
    this.offsetDistance.next(ce.offsetDistance);
    this.city.next(ce.city);
    this.county.next(ce.county);
    this.onPublicRoads.next(ce.onPublicRoads);
    this.dotProperty.next(ce.fdotPropertyCode);
    this.siteLocation.next(ce.siteLocation);
    this.sideOfRoad.next(ce.sideOfRoad);
    this.crashLane.next(ce.crashLane);
    this.crashInjury.next(ce.crashSeverity);
    this.roadwaySystemId.next(ce.roadwaySystemId);
    this.numberOfLanes.next(ce.numberOfLanes);
    this.ownership.next(ce.ownership);
    this.routeSignage.next(ce.routeSignage);
    this.postedSpeedLimit.next(ce.postedSpeedLimit);
    this.functionalClass.next(ce.functionalClass);
    this.bicyclistCount.next(ce.bicyclistCount);
    this.pedestrianCount.next(ce.pedestrianCount);
    this.comments.next('');
    console.log(this);
  }

}
