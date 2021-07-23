import {BehaviorSubject} from "rxjs";

export abstract class WatchableService {
  public serviceIsLoaded$ = new BehaviorSubject<boolean>(false);
}
