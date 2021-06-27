import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EditorWorkQueue } from '../models/editor-work-queue';
import { S4User } from '../models/s4-user';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EditorQueueService {

  constructor(private http: HttpClient) {}

  // public getRecord(user: S4User): Observable<EditorWorkQueue> | false {
  //   return this.http.get<EditorWorkQueue>(this.apiUrl + '/editor-queue/');
  // }
}
