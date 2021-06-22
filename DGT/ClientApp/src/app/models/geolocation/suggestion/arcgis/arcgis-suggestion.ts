import { Suggestion } from 'app/models/geolocation/suggestion/suggestion';

export interface ArcgisSuggestion extends Suggestion {
  address: string;

  location: {
    x: number,
    y: number
  };

  score: number;

  attributes: {
    Addr_type: string
  };

  extent: {
    xmin: number,
    ymin: number,
    xmax: number,
    ymax: number
  };
}
