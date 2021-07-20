import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
// @ts-ignore
import * as mapbox from 'mapbox-gl';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {Geocoding} from "app/models/crash-event/geocoding";
import {environment} from "environments/environment";
import {GeocodeService} from "app/services/s4/geocode.service";

@Component({
  selector: 'dgt-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements AfterViewInit {
  private _map: mapbox.Map;
  private _defaultCenter = <mapbox.LngLatLike>[-83.21, 27.945];

  @ViewChild('map') mapElement: ElementRef;

  /**
   *
   * @param _crashEvent
   * @param _geocoder
   */
  constructor(
    private _crashEvent: CrashEventService,
    private _geocoder: GeocodeService
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

    this._geocoder.mode$.subscribe((v) => {
      this._setCursor(v);
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

    this._createMapObject(center.x, center.y, 17)
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

    this._geocoder.next(lat, lng);
    const segId = this._geocoder.getNearestSegmentId();

    try {
      this._map.setFilter('streets-selected', ['in', ['id'], ['literal', [segId]]]);
      this._map.setLayoutProperty('streets-selected', 'visibility', 'visible');

    } catch (e) {

    }
  }

  private _setCursor(mode: string): void {
    this.mapElement.nativeElement.className += ' ' + mode;
  }

}
