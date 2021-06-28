import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { environment } from 'environments/environment';
import { EditorQueueService } from 'app/services/s4/editor-queue.service';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'any', // EditorModule
})
export class CrashEventService implements OnInit {
  private url = environment.s4.crashEventService.url;
  private cache: CrashEvent;
  private $data: BehaviorSubject<CrashEvent>;

  constructor(private http: HttpClient, private workQueueService: EditorQueueService) {
    this.nextRecord(1);
  }

  public nextRecord(hsmvReportNumber: number = 1234): any {
    this.http.get<CrashEvent>(this.url + hsmvReportNumber).subscribe(response => {
      if (this.$data === undefined) {
        this.$data = new BehaviorSubject<CrashEvent>(response);
        this.cache = response;
      }

      this.$data.next(response);
      return response;
    });
  }

  public updateFieldValue(fieldName: string, value: any): void {
    const currentVal = this.$data.getValue();
    const newVal = {...currentVal, [fieldName]: value};

    this.$data.next(newVal);
  }

  public ngOnInit(): void {
    this.nextRecord(12345);
  }

}
