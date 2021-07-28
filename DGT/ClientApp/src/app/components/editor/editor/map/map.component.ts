import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapbox from 'mapbox-gl';
import { CrashEventService } from "app/services/s4/crash-event.service";
import { Geocoding } from "app/models/crash-event/geocoding";
import { environment } from "environments/environment";
import { GeocodeService } from "app/services/s4/geocode.service";
import { ETL_STATUS, MAP_BOUNDARY } from 'app/models/constants';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { MapPoint } from 'app/models/geolocation/map-point';
import { Feature, FeatureCollection } from 'geojson';

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
      let event = this._crashEvent.getCurrentRecord();
      this._initMap(event, v)
    }).then((v) => {
      console.log('Map initialized. ');
    });

    this._geocoder.mode$.subscribe((v) => {
      this._setCursor(v);
    });
  }

  public onZoomIn() { this._map.zoomIn(); }
  public onZoomOut() { this._map.zoomOut(); }
  public onZoomToState() { this._map.fitBounds(MAP_BOUNDARY); }
  public onZoomToCurrent() { /* TODO */ }

  /**
   *
   * @param geocoding
   * @private
   */
  private async _initMap(crashEvent:CrashEvent, geocoding: Geocoding): Promise<void> {
    const map = this._createMapObject(17);
    map.on('load', async () => {
      let features = this._createGeoJSONFeatures(crashEvent);
      await this._addSources(map, features);
      await this._addLayers(map);
      this._fitToFeatures(map, features);

      const points = geocoding.mapPoints;
      points.forEach((point) => {
        new mapbox.Marker()
          .setLngLat([point.x, point.y])
          .addTo(map)
      });

      map.on('click', (e) => {
        this._onMapClick(e);
        // new mapbox.Popup()
        //   .setLngLat(e.lngLat)
        //   .setHTML('point:  <br/>' + e.lngLat)
        //   .addTo(this._map);
      });
      this._map = map;
    })
  }

  /**
  *
  * @private
  */

  private async _addLayers(map: mapbox.Map) {
    map.addLayer({
      id: 'crash-points',
      type: 'circle',
      source: 'crash-point-source', // current features
      filter: ['!', ['has', 'point_count']],
      paint: {
        'circle-radius': [
          'interpolate', ['linear'], ['zoom'],
          5, 3, 10, 4, 16, 8, 22, 16
        ],
        'circle-color': {
          property: 'etlStatus',
          stops: [
            [0, '#000'],
            ETL_STATUS['officerMapped'],
            ETL_STATUS['computerConfident'],
            ETL_STATUS['computerTie'],
            ETL_STATUS['computerApproximate'],
            ETL_STATUS['latLongPlot']
          ]
        }
      }
    });
  }

  private async _addSources(map: mapbox.Map, features: FeatureCollection) {
    map.addSource('crash-point-source', {
      type: 'geojson',
      data: features
    })
  }

  private _createMapObject(z: number): mapbox.Map {
    return new mapbox.Map({
      accessToken: environment.mapbox.accessToken,
      zoom: z,
      // center: <mapbox.LngLatLike>[x, y],
      container: 'map',
      pitchWithRotate: false,
      maxBounds: MAP_BOUNDARY,
      style: environment.mapbox.style,
    });
  }

  private _createGeoJSONFeatures(crashEvent: CrashEvent) {
    let featureCollection: any = {
      features: [],
      type: 'FeatureCollection'
    };
    if (crashEvent && crashEvent.geocoding) {
      const etlStatusCode = crashEvent.geocoding.etlGeoLocationStatus ? ETL_STATUS[crashEvent.geocoding.etlGeoLocationStatus][0] : 3;
      featureCollection.features = crashEvent.geocoding.mapPoints.map((point: MapPoint) => {
        return {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [point.x, point.y]
          },
          properties: {
            etlStatus: etlStatusCode
          }
        };
      });
      if(crashEvent.originalLng && crashEvent.originalLat) {
        featureCollection.features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [crashEvent.originalLng, crashEvent.originalLat]
          },
          properties:{
            etlStatus: 5
          }
        })
      }
    }
    return featureCollection;
  }

  private _fitToFeatures(map:mapbox.Map, featureCollection: any) {
    let ne: any = MAP_BOUNDARY[0],
      sw: any = MAP_BOUNDARY[1];
      const coordinates: number[][] = featureCollection.features.map((feature: any) => feature.geometry.coordinates);
      coordinates.forEach((coordinate) => {
        if (coordinate[0] > ne[0]) {
          ne[0] = coordinate[0];
        }
        if (coordinate[0] < sw[0]) {
          sw[0] = coordinate[0];
        }
        if (coordinate[1] > ne[1]) {
          ne[1] = coordinate[1];
        }
        if (coordinate[1] < sw[1]) {
          sw[1] = coordinate[1];
        }
      });
      const bounds = new mapbox.LngLatBounds(sw, ne);
      map.fitBounds(bounds, { padding: 50 });
  }

  private _onMapClick(e: any): void {
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
      console.log(e);
    }
  }

  private _setCursor(mode: string): void {
    // this.mapElement.nativeElement.className += ' ' + mode;
  }

  private _updateGeoJSONSource(data: FeatureCollection){
    let source = this._map.getSource('crash-point-source') as mapbox.GeoJSONSource;
    if(source) { source.setData(data); }
  }
}
