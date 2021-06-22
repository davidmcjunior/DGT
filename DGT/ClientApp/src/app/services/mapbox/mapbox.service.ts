import { inject, Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { IMapService } from 'app/models/interfaces/mapservice.interface';
// @ts-ignore
import * as mapboxgl from 'mapbox-gl';
import { Location } from 'app/models/geolocation/location';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapboxService implements IMapService {
  map: mapboxgl.Map;
  map$: BehaviorSubject<mapboxgl.Map>;

  marker: mapboxgl.Marker;
  lat = 27.964157;
  lng = -82.452606; // Tampa
  zoom = 13;

  constructor() {
  }

  public initMap(): void {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    const center = [this.lng, this.lat];

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // environment.mapbox.style,
      zoom: this.zoom,
      center: center
    });

    this.map.addControl(new mapboxgl.NavigationControl());
    this.map$ = new BehaviorSubject<mapboxgl.Map>(this.map);
  }

  public flyTo(loc: Location): void {
    const center = [loc.x, loc.y];

    this.map.flyTo({
      center: center,
      zoom: this.zoom
    });

    this.markMap(center);
  }

  markMap(center: number[]): void {
    this.marker = new mapboxgl.Marker()
      .setLngLat(center)
      .addTo(this.map);
  }

}
