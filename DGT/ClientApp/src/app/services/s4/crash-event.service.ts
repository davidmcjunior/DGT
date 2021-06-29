import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { environment } from 'environments/environment';
import { EditorQueueService } from 'app/services/s4/editor-queue.service';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root', // EditorModule
})
export class CrashEventService {
  private url = environment.s4.crashEventService.url;
  private cache: CrashEvent;
  private readonly data$: Subject<CrashEvent>;

  constructor(private http: HttpClient, private workQueueService: EditorQueueService) {
    console.log('CrashEventService');
    this.data$ = new Subject<CrashEvent>();
    this.nextRecord(12345);
  }

  public nextRecord(hsmvReportNumber: number): void {
    this.http.get<CrashEvent>(this.url + hsmvReportNumber).subscribe(response => {
      this.data$.next(response);
      this.cache = response;
    });
  }

  public updateFieldValue(fieldName: string, value: any): void {
    // @ts-ignore
    const currentVal = this.data$.value;
    const newVal = {...currentVal, [fieldName]: value};

    this.data$.next(newVal);
  }

  public getField(field: string): any {
    // @ts-ignore
    return this.data$.pipe(map(object => object[field]));
  }

}
