import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ArcgisResponse as SuggestionResponse } from 'app/models/geolocation/suggestion/arcgis/arcgis-response';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArcGisSuggestionService { // implements SuggestionService {
  private url = environment.arcGis.suggestionService.url;
  private defaultParamStr = environment.arcGis.suggestionService.defaultHttpParams;

  constructor(private http: HttpClient) {}

  public getSuggestions(address: string, region: string = 'FL'): Observable<SuggestionResponse> {
    address = encodeURI(address);

    const urlStr = `${this.url}?${this.defaultParamStr}&singleLine=${address}`;

    return this.http.get<SuggestionResponse>(urlStr);
  }
}
