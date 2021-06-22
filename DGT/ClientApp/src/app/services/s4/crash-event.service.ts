import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrashEventInMemoryDataService as TestDataService } from 'app/services/s4/crash-event/test/crash-event-in-memory-data.service';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { NavigationBehaviorOptions } from '@angular/router';
import { environment } from 'environments/environment';
import { WorkQueueService } from 'app/services/s4/work-queue.service';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'any', // EditorModule
})
export class CrashEventService implements OnInit {
  private url = environment.s4.crashEventService.url;

  private crashEventSubject: Subject<CrashEvent>;
  public crashEvent$: Observable<CrashEvent>;

  constructor(private http: HttpClient, private testDataService: TestDataService, private workQueueService: WorkQueueService) {}

  public nextRecord(hsmvReportNumber: number): any {
    this.http.get<CrashEvent>(this.url + hsmvReportNumber).pipe( map( v => {
      this.crashEventSubject.next(v);
      return v;
    }));
  }

  public ngOnInit(): void {
    this.crashEventSubject = new Subject<CrashEvent>();
  }

  public getTestRecord(hsmvReportNumber: number): Observable<CrashEvent> {
    return this.testDataService.getRecord(hsmvReportNumber);
  }
}
