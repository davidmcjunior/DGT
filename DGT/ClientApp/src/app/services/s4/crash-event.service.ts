import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { environment } from 'environments/environment';
import { EditorQueueService } from 'app/services/s4/editor-queue.service';
import { FormControlModelService } from "../forms/crash-event/form-control-model.service";
import {WatchableService} from "app/models/services/watchable-service";

@Injectable({
  providedIn: 'root', // EditorModule
})
export class CrashEventService extends WatchableService {
  private _url = environment.s4.crashEventService.url;
  // internal crash data object...
  private _data: CrashEvent;
  // cached initial values of crash event data. For displaying on forms -- or reversion if necessary...
  private _cache: CrashEvent;
  // key/value pairings of field names to their behavior subject objects...
  private _fields: Map<string, BehaviorSubject<any>>;
  // names of crash event fields...
  private _fieldKeys: string[];

  // Get an observable representation of the data...
  public record$: Observable<CrashEvent>;

  // Halt initialization of anything that's dependant on the behavior subject fields being fully up...
  public recordIsLoaded$ = new BehaviorSubject<boolean>(false);

  // Subscribe components to these boolean flag streams to control visibility...
  public publicCrashFieldsAreEnabled$ = new BehaviorSubject<boolean>(false);
  public locationOnlyFieldsAreEnabled$ = new BehaviorSubject<boolean>(false);

  /**
   *
   * @param http
   * @param formControlService
   * @param queue
   */
  constructor(private http: HttpClient, private formControlService: FormControlModelService, private queue: EditorQueueService) {
    super();
    this._fieldKeys = this.formControlService.getFieldKeys();
    this.next(this.queue.next());
  }

  /**
   *
   * @param hsmvReportNumber: int
   */
  public next(hsmvReportNumber): this {
    this._loadNext(hsmvReportNumber).then(r => {});

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
   * @param key
   */
  public getFieldValue(key: string): any {
    return this._fields.get(key)?.value;
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
  private async _loadNext(hsmvReportNumber: number): Promise<this> {
    this.recordIsLoaded$.next(false);
    this.serviceIsLoaded$.next(false);

    this.http.get<CrashEvent>(this._url + hsmvReportNumber).subscribe(async response => {
      this._initData(response).then(() => {
        this.recordIsLoaded$.next(true);
        this.serviceIsLoaded$.next(true);
        this._initInterFieldSubscriptions();
      });
    });

    return this;
  }

  /**
   *
   * @param ce
   * @private
   */
  private async _initData(ce: CrashEvent): Promise<this> {
    this._fields = new Map<string, BehaviorSubject<any>>();
    this._data = this._cache = ce;

    this._fieldKeys.forEach(key => {
      const field$ = new BehaviorSubject<any>(this._data[key]);

      field$.subscribe({
        next: (val) => this._data[key] = val,
        error: (err) => this._handleError(err)
      });

      this._fields.set(key, field$);
    });

    this._initInterFieldSubscriptions();
    this.record$ = of(ce);

    return this;
  }

  /**
   *
   * @param fieldName
   * @param callback
   */
  public async subscribeToFieldSubject(fieldName: string, callback: Function): Promise<this> {
    this.recordIsLoaded$.subscribe((isLoaded) => {
      if (isLoaded) {
        const field = this.getFieldSubject(fieldName);

        if (field) {
          field.subscribe({
            next: (v) => {
              callback(v);
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

  private _initInterFieldSubscriptions(): this {
    const onPublicRoads$ = this._fields.get('onPublicRoads');
    const siteLocation$  = this._fields.get('siteLocation');
    const crashInjury$   = this._fields.get('crashInjury');
    const sideOfRoad$    = this._fields.get('sideOfRoad');
    const crashLane$     = this._fields.get('crashLane');

    onPublicRoads$?.subscribe((v) => {
      this.publicCrashFieldsAreEnabled$.next((v == true || v == 'true') && (crashInjury$?.value == '5' || crashInjury$?.value == 5));
    });

    onPublicRoads$?.subscribe((v) => {
      this.locationOnlyFieldsAreEnabled$.next(v == true || v == 'true');
    });

    crashInjury$?.subscribe((v) => {
      this.publicCrashFieldsAreEnabled$.next((v == '5' || v == 5) && (onPublicRoads$?.value == true));
    });

    onPublicRoads$?.subscribe((v) => {
      if (v == 'false' || !v) {
        sideOfRoad$?.next('P');
        crashLane$?.next('P');
      }
    });

    siteLocation$?.subscribe((v) => {
      if (['9', '10', '11', 9, 10, 11].includes(v)) {
        onPublicRoads$?.next(false);
      } else {
        onPublicRoads$?.next(true);
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
