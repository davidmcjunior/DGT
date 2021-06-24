import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrashEventInMemoryDataService as TestDataService } from 'app/services/s4/crash-event/test/crash-event-in-memory-data.service';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { environment } from 'environments/environment';
import { EditorQueueService } from 'app/services/s4/editor-queue.service';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'any', // EditorModule
})
export class CrashEventService implements OnInit {
  private url = environment.s4.crashEventService.url;

  private crashEventSubject: Subject<CrashEvent>;
  public crashEvent$: Observable<CrashEvent>;

  constructor(private http: HttpClient, private testDataService: TestDataService, private workQueueService: EditorQueueService) {}

  public nextRecord(hsmvReportNumber: number): any {
    return this.http.get<CrashEvent>(this.url + hsmvReportNumber).pipe(map(v => {
      this.crashEventSubject.next(v);
      return v;
    }));
  }

  public ngOnInit(): void {
    this.crashEventSubject = new Subject<CrashEvent>();
  }

}
