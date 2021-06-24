import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorQueueService {
  constructor(private http: HttpClient) { }

  public getQueue(): Observable<any> {
    return of([102, 103, 105, 106]);
  }
}
