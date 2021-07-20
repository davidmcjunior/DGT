import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorQueueService {
  private _index = 0;

  constructor(private http: HttpClient) { }

  public getQueue(): Observable<any> {
    return of([100, 200, 300, 400]);
  }

  public next() {
    return this._index += 100;
  }
}
