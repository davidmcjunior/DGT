import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { CrashEventService } from 'app/services/s4/crash-event.service';

@Injectable({
  providedIn: 'root'
})
export class CrashEventResolver implements Resolve<CrashEvent> {
  constructor(private service: CrashEventService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  }
}
