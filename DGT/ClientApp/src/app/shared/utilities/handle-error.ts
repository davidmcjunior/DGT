import { throwError, Observable } from 'rxjs';

export let handleError = (error: any): Observable<never> => {
  let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  return throwError(errMsg);
};
