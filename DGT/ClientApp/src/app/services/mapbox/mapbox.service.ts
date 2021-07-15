import {inject, Injectable, OnInit} from '@angular/core';
import { environment } from 'environments/environment';
import { IMapService } from 'app/models/interfaces/mapservice.interface';
// @ts-ignore
import * as mapboxgl from 'mapbox-gl';
import { MapPoint } from 'app/models/geolocation/map-point';
import {CrashEventService} from "../s4/crash-event.service";

@Injectable({
  providedIn: 'root'
})
export class MapboxService implements OnInit {
  _map: mapboxgl.Map;
  _mapPoints: MapPoint[];

  // _marker: mapboxgl.Marker;
  // _lat = 27.964157;
  // _lng = -82.452606; // Tampa
  _zoom = 13;

  constructor(private crashEvent: CrashEventService) {
  }

  ngOnInit(): void {
    this.crashEvent.recordIsLoaded$.subscribe((isLoaded) => {
      if (isLoaded) {
        this.crashEvent.getFieldSubject('geocoding')?.subscribe((geocoding) => {
          this.initMap(geocoding.mapPoints);
        });
      }
    });
  }

  public async initMap(mapPoints: MapPoint[]): Promise<any> {
    mapboxgl.accessToken = environment.mapbox.accessToken;

    this._map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // environment.mapbox.style,
      zoom: this._zoom,
      center: mapPoints[1]
    });

    mapPoints.forEach((point) => {
      new mapboxgl.Marker()
        .setLngLat(point)
        .addTo(this._map);
    });

    this._map.addControl(new mapboxgl.NavigationControl());
  }

  public flyTo(loc: MapPoint): void {
    this._map.flyTo({
      center: loc,
      zoom: this._zoom
    });

    this.markMap(loc);
  }

  markMap(center: MapPoint): void {
    const marker = new mapboxgl.Marker()
      .setLngLat(center)
      .addTo(this._map);
  }

  private plotMarkers(points: [{x:number, y:number}]): void {

  }

}
