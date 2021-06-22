import { ArcgisSuggestion } from 'app/models/geolocation/suggestion/arcgis/arcgis-suggestion';
import { Response } from 'app/models/geolocation/suggestion/response';

export interface ArcgisResponse extends Response {
  spatialReference: {
    wkid: number,
    latestWkid: number
  };

  candidates: ArcgisSuggestion[];
}

