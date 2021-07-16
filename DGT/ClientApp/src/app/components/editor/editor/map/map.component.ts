import {AfterViewInit, Component} from '@angular/core';
// @ts-ignore
import * as mapbox from 'mapbox-gl';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {Geocoding} from "app/models/crash-event/geocoding";
import {environment} from "environments/environment";

@Component({
  selector: 'dgt-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements AfterViewInit {
  private _map: mapbox.Map;
  private _defaultCenter = <mapbox.LngLatLike>[-83.21, 27.945];

  /**
   *
   * @param _crashEvent
   */
  constructor(
    private _crashEvent: CrashEventService
  ) { }

  /**
   *
   */
  ngAfterViewInit(): void {
    this._crashEvent.subscribeToFieldSubject('geocoding', (v) => {
      this._initMap(v);
    }).then((v) => {
      console.log('Map initialized. ');
    });
  }

  /**
   *
   * @param geocoding
   * @private
   */
  private _initMap(geocoding: Geocoding): void {
    const points = geocoding.mapPoints;
    const center = points[1];

    this._createMapObject(center.x, center.y, 13)
      .then((map) => {
        this._map = map;

        points.forEach((point) => {
          new mapbox.Marker()
            .setLngLat([point.x, point.y])
            .addTo(this._map)
        });
      }).then(() => {
        this._map.addControl(new mapbox.NavigationControl(), 'bottom-right');
      });
  }

  /**
   *
   * @private
   */
  private async _createMapObject(x: number, y: number, z: number): Promise<mapbox.Map> {
    mapbox.accessToken = environment.mapbox.accessToken;

    return new mapbox.Map({
      zoom: z,
      center: <mapbox.LngLatLike>[x, y],
      container: 'map',
      style: environment.mapbox.style,
    });
  }

  onMapClick($event: Event): void {

  }
}
