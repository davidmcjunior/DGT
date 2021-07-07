import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { environment } from 'environments/environment';
import { EditorQueueService } from 'app/services/s4/editor-queue.service';
import { FormControlModelService } from "../forms/crash-event/form-control-model.service";
import {CrashEventRecordFieldBase} from "../../components/editor/editor/crash-event-record/crash-event-record-controls/crash-event-record-field-base";

@Injectable({
  providedIn: 'root', // EditorModule
})
export class CrashEventService {
  private _url = environment.s4.crashEventService.url;
  private _data: CrashEvent;
  private _cache: CrashEvent;
  private _fields: Map<string, BehaviorSubject<Date | string | number>>;
  private _fieldKeys: string[];

  public record$: Observable<CrashEvent>;
  public recordIsLoaded$ = new BehaviorSubject<boolean>(false);

  /**
   *
   * @param http
   * @param formControlService
   * @param queue
   */
  constructor(private http: HttpClient, private formControlService: FormControlModelService, private queue: EditorQueueService) {
    this._fieldKeys = this.formControlService.getFieldKeys();
    this.nextRecord(this.queue.getNextReportId());
  }

  /**
   *
   * @param hsmvReportNumber: int
   */
  public nextRecord(hsmvReportNumber): this {
    this._loadRecord(hsmvReportNumber).then(r => {});

    return this;
  }

  /**
   *
   * @param key
   */
  public getFieldSubject(key: string): BehaviorSubject<any> | undefined {
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
   * @param hsmvReportNumber
   * @private
   */
  private async _loadRecord(hsmvReportNumber: number): Promise<any> {
    this.recordIsLoaded$.next(false);

    this.http.get<CrashEvent>(this._url + hsmvReportNumber).subscribe(async response => {
      this._initData(response).then(() => {
        this.recordIsLoaded$.next(true);
      });
    });
  }

  /**
   *
   * @param ce
   * @private
   */
  private async _initData(ce: CrashEvent): Promise<any> {
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

    this.record$ = of(ce);
  }

  /**
   *
   * @param component
   */
  public async subscribeComponent(component: CrashEventRecordFieldBase): Promise<this> {
    this.recordIsLoaded$.subscribe((isLoaded) => {
      if (isLoaded) {
        const field = this.getFieldSubject(component.getFieldKey());

        if (field) {
          field.subscribe({
            next: (v) => {
              component.setInitValIf(v).setValue(v);
            },
            error: (err) => {
              console.log(err);
            }
          });
        }
      }
    });

    return this;
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
