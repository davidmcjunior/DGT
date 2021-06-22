import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EditorWorkQueue } from '../models/editor-work-queue';
import { S4User } from '../models/s4-user';
import { CrashEventInMemoryDataService } from './s4/crash-event/test/crash-event-in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class EditorQueueService {

  constructor(private dataService: CrashEventInMemoryDataService /*private http: HttpClient, @Inject('API_URL') protected apiUrl: string */) {}

  // public getRecord(user: S4User): Observable<EditorWorkQueue> | false {
  //   return this.http.get<EditorWorkQueue>(this.apiUrl + '/editor-queue/');
  // }
}
