import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import * as mapbox from 'mapbox-gl';
import { CrashEventService } from "app/services/s4/crash-event.service";
import { Geocoding } from "app/models/crash-event/geocoding";
import { environment } from "environments/environment";
import { GeocodeService } from "app/services/s4/geocode.service";
import { ETL_STATUS, MAP_BOUNDARY } from 'app/models/constants';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { MapPoint } from 'app/models/geolocation/map-point';
import { Feature, FeatureCollection } from 'geojson';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'dgt-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements AfterViewInit {
  private _map: mapbox.Map;
  private _defaultCenter = <mapbox.LngLatLike>[-83.21, 27.945];
  private _ghostMarker: mapbox.Marker;
  private _marker: mapbox.Marker;

  @ViewChild('map') mapElement: ElementRef;

  @HostListener('window:click', ['$event'])
  handleMarkerPopupClick = (event: MouseEvent | any) => {
    if (event.target.id === 'popup-reject') {
      const lngLat = this._ghostMarker.getLngLat();
      this._ghostMarker.remove();
      this._marker.togglePopup().setLngLat(lngLat).setDraggable(true);
    }
    else if (event.target.id === 'popup-confirm') {
      this._marker.togglePopup().setDraggable(true);
      this._ghostMarker.remove();
      this._highlightStreetSegment(this._marker.getLngLat())
    }
  }

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
      this._initMap(event)
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
   * @param crashEvent
   * @private
   */

  private async _initMap(crashEvent: CrashEvent): Promise<void> {
    const map = this._createMapObject(17);

    map.on('load', async () => {
      let features = this._createGeoJSONFeatures(crashEvent);
      await this._addSources(map, features);
      await this._addLayers(map);
      this._fitToFeatures(map, features);

      map.on('click', (e) => {
        if (!e.hasOwnProperty('lngLat') || this._geocoder.mode$.value === '') {
          return;
        }
        this._addDragableMarker(e.lngLat)
      });

      this._map = map;
    })
  }

  /**
  *
  * @private
  */
  private _addDragableMarker(point: mapbox.LngLat) {
    if (this._marker) { this._marker.remove(); }
    if (this._ghostMarker) {this._ghostMarker.remove(); }

    const marker = new mapbox.Marker({
      draggable: true,
      color: ETL_STATUS['officerMapped'][1]
    }).setLngLat(new mapbox.LngLat(point.lng, point.lat))
      .setPopup(this._addMarkerPopup())
      .addTo(this._map)

    marker.on('dragstart', (e) => {
      // create ghost marker
      this._ghostMarker = new mapbox.Marker({
        color: 'rgba(5, 150, 105, 0.5)'
      }).setLngLat(marker.getLngLat()).addTo(this._map)
    });

    marker.on('dragend', (e) => {
      marker.togglePopup().setDraggable(false);
    });
    this._marker = marker;
    this._highlightStreetSegment(point);
  }

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

  private _addMarkerPopup(): mapbox.Popup {
    return new mapbox.Popup({
      closeButton: false,
      closeOnMove: false,
      closeOnClick: false
    }).setHTML(
      `<div style="display: flex; justify-content: space-between; align-items: center">
        <span id="popup-reject" style="color: red; cursor: pointer">Reject</span>
        <span style="margin:0 1rem">|</span>
        <span id="popup-confirm" style="color: green; cursor: pointer">Confirm</span>
      </div>`)
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
      const etlStatusCode = crashEvent.geocoding.etlGeoLocationStatus ? ETL_STATUS[crashEvent.geocoding.etlGeoLocationStatus] : 0;
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

  private _fitToFeatures(map: mapbox.Map, featureCollection: FeatureCollection) {
    let ne: any = MAP_BOUNDARY[0],
      sw: any = MAP_BOUNDARY[1];
    const coordinates: number[][] = featureCollection.features
      .map((feature: any) => feature.geometry.coordinates);

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

  private _highlightStreetSegment(point: mapbox.LngLat) {
    this._geocoder.getNearestSegmentId(point)
      .subscribe((segId: number) => {
        try {
          this._map.setFilter('streets-selected', ['in', ['id'], ['literal', [segId]]]);
          this._map.setLayoutProperty('streets-selected', 'visibility', 'visible');
        } catch (e) {
          console.log(e);
        }
      })
  }

  private _setCursor(mode: string): void {
    // this.mapElement.nativeElement.className += ' ' + mode;
  }

  private _updateGeoJSONSource(data: FeatureCollection){
    let source = this._map.getSource('crash-point-source') as mapbox.GeoJSONSource;
    if (source) { source.setData(data); }
  }
}
