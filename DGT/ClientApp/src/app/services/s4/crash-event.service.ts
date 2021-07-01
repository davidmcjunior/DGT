import { Component, Inject, Injectable, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { environment } from 'environments/environment';
import { EditorQueueService } from 'app/services/s4/editor-queue.service';
import {FormControlModelService} from "../forms/crash-event/form-control-model.service";

@Injectable({
  providedIn: 'root', // EditorModule
})
export class CrashEventService {
  private _url = environment.s4.crashEventService.url;
  private _data: CrashEvent;
  private _cache: CrashEvent;
  private _fields: Map<string, BehaviorSubject<Date | string | number>>;
  private _fieldKeys: string[];

  public crashEvent$: Observable<CrashEvent>;
  public crashEventIsLoaded$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private formControlService: FormControlModelService, private workQueueService: EditorQueueService) {
    const hsmvRecordNumber = 10101; // from Queue service
    this._fieldKeys = this.formControlService.getFieldKeys();

    this._getRecord(hsmvRecordNumber).subscribe(async response => {
      this._init(response).then(() =>{
        this.crashEventIsLoaded$.next(true);
      });
    });
  }

  /**
   *
   * @param key
   */
  public getField(key: string): BehaviorSubject<Date | string | number> | undefined {
    return this._fields.get(key);
  }

  /**
   *
   */
  public getCurrentRecord(): CrashEvent {
    return this._data;
  }

  /**
   *
   * @param ce
   * @private
   */
  private async _init(ce: CrashEvent): Promise<boolean> {
    this._fields = new Map<string, BehaviorSubject<Date | string | number>>();
    this._data = this._cache = ce;

    this._fieldKeys.forEach(key => {
      const field$ = new BehaviorSubject<Date | string | number>(this._data[key]);

      field$.subscribe({
        next: (val) => this._data[key] = val,
        error: (err) => this._handleError(err)
      });

      this._fields.set(key, field$);
    });

    this.crashEvent$ = of(ce);

    return true;
  }

  /**
   *
   * @param hsmvReportNumber
   * @private
   */
  private _getRecord(hsmvReportNumber: number): Observable<CrashEvent> {
    return this.http.get<CrashEvent>(this._url + hsmvReportNumber);
  }

  /**
   *
   * @param error
   * @private
   */
  private _handleError(error: Error): void {
    console.log(error);
  }

}
