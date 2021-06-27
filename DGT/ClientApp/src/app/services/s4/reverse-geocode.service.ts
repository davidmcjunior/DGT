import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReverseGeocodeService {
  constructor(private http: HttpClient) { }

  public getAttributes(lat: number = 25.857596, lng: number = -80.27810, mode: string = 'SEGMENT'): any {
    let response: any;
    const configs = environment.s4.reverseGeocodeService;
    const url = configs.url + encodeURI(`${configs.key}/${lat}/${lng}/${configs.agency}/${mode}`);

    this.http.get<any>(url).subscribe(v => {
      response = v;
    });

    return response;
  }
}
