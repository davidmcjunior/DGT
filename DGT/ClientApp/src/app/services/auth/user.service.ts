import { Inject, Injectable } from '@angular/core';
import { S4User, S4Role } from 'app/models/s4-user';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: S4User;

  constructor(private http: HttpClient) {}

  public getCurrentS4User(): Observable<S4User> | false {
    return of({
      id: 1234,
      name: 'Bob roberts',
      roles: []
    });
  }
}
