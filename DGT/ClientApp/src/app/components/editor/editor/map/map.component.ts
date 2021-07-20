import {AfterViewInit, Component} from '@angular/core';
// @ts-ignore
import * as mapbox from 'mapbox-gl';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {Geocoding} from "app/models/crash-event/geocoding";
import {environment} from "environments/environment";
import {ReverseGeocodeService} from "app/services/s4/reverse-geocode.service";

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
   * @param _reverseGeocoder
   */
  constructor(
    private _crashEvent: CrashEventService,
    private _reverseGeocoder: ReverseGeocodeService
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

        // map.on('load', function () {});

        points.forEach((point) => {
          new mapbox.Marker()
            .setLngLat([point.x, point.y])
            .addTo(map)
        });

        this._map = map;
      }).then(() => {
        this._map.addControl(new mapbox.NavigationControl(), 'bottom-right');
        this._map.on('click', (e) => {
          this.onMapClick(e);
          // new mapbox.Popup()
          //   .setLngLat(e.lngLat)
          //   .setHTML('point:  <br/>' + e.lngLat)
          //   .addTo(this._map);
        });
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

  onMapClick(e: any): void {
    if (!e.hasOwnProperty('lngLat')) {
      return;
    }

    const point = e.lngLat;
    const lat = point['lat'];
    const lng = point['lng'];

    this._reverseGeocoder.getGeocoding(lat, lng);
  }

}
