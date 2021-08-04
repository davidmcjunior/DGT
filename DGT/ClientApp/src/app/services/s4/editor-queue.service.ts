import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {WatchableService} from "app/models/services/watchable-service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditorQueueService extends WatchableService {
  private _name = 'Dade Nonfatal'
  private _index = -1;
  private _queue = [
    // 100,
    // 200,
    // 300,
    // 400,
    88416900,
    24089254,
    88030750,
    24089323,
    24089712,
    24089722,
    88472946,
    89918672,
    88437234,
    88437237,
    11111111
  ];

  public position$: BehaviorSubject<number>;

  constructor(private _http: HttpClient) {
    super();
    this.position$ = new BehaviorSubject<number>(this._index);
    this.serviceIsLoaded$.next(true);
  }

  public prev(): number {
    if (this._index > 0) {
      this.position$.next(--this._index);
    }

    return this._queue[this._index];
  }

  public next(): number {
    if (this._index < this._queue.length) {
      console.log(this._index);
      this.position$.next(++this._index);
    }

    return this._queue[this._index];
  }

  public getSize(): number {
    return this._queue.length;
  }

  public getName(): string {
    return this._name;
  }
}
