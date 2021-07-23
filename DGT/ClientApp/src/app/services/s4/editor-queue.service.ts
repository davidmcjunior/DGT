import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {WatchableService} from "../../models/services/watchable-service";

@Injectable({
  providedIn: 'root'
})
export class EditorQueueService extends WatchableService {
  private _index = 0;

  constructor(private _http: HttpClient) {
    super();
  }

  public getQueue(): Observable<any> {
    return of([100, 200, 300, 400]);
  }

  public next() {
    return this._index += 100;
  }
}
