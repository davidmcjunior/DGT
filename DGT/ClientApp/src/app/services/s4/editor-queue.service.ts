import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {WatchableService} from "app/models/services/watchable-service";

@Injectable({
  providedIn: 'root'
})
export class EditorQueueService extends WatchableService {
  private _index = 0;
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
    88437237
  ];

  constructor(private _http: HttpClient) {
    super();
  }

  public prev(): number {
    return this._index > 0 ? this._queue[this._index--] : this._queue[this._index];
  }

  public next(): number {
    return this._index < this._queue.length ? this._queue[this._index++] : this._queue[this._index];
  }
}
