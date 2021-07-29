import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import * as mapbox from 'mapbox-gl';
import { CrashEventService } from "app/services/s4/crash-event.service";
import { environment } from "environments/environment";
import { GeocodeService } from "app/services/s4/geocode.service";
import { ETL_STATUS, MAP_BOUNDARY } from 'app/models/constants';
import { CrashEvent } from 'app/models/crash-event/crash-event';
import { MapPoint } from 'app/models/geolocation/map-point';
import { FeatureCollection } from 'geojson';

@Component({
  selector: 'dgt-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements AfterViewInit, OnChanges {
  @Input() currentRecord: CrashEvent | undefined;
  private _defaultCenter = <mapbox.LngLatLike>[-83.21, 27.945];
  private _featureCollection: FeatureCollection;
  private _ghostMarker: mapbox.Marker | undefined;
  private _hasARecordWaiting = false;
  private _map: mapbox.Map;
  private _marker: mapbox.Marker | undefined;

  @ViewChild('map') mapElement: ElementRef;

  @HostListener('window:click', ['$event'])
  handleMarkerPopupClick = (event: MouseEvent | any) => {
    if (event.target.id === 'popup-reject' && this._marker && this._ghostMarker) {
      const lngLat = this._ghostMarker.getLngLat();
      this._ghostMarker.remove();
      this._ghostMarker = undefined;
      this._marker.togglePopup().setLngLat(lngLat).setDraggable(true);
    }
    else if (event.target.id === 'popup-confirm' && this._marker && this._ghostMarker) {
      this._marker.togglePopup().setDraggable(true);
      this._ghostMarker.remove();
      this._ghostMarker = undefined;
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
    this._initMap()
  }
  ngOnChanges(changes: SimpleChanges) {
    const currentRecord = changes.currentRecord;
    console.log(currentRecord)
    if (currentRecord.currentValue === undefined) {
      console.log('clear');
      this._clearMap();
      return;
    }
    if (currentRecord.currentValue !== undefined) {
      this._loadRecord();
    }
  }

  get _coordinates(): number[][] {
    return this._featureCollection.features
      .map((feature: any) => feature.geometry.coordinates);
  }

  public onLocationChanged(lngLat: mapbox.LngLat | undefined) {
    if (this._map && lngLat) {
      this._map.easeTo({ center: lngLat, zoom: 15, animate: false })
    }
  }
  public onZoomIn() { this._map.zoomIn(); }
  public onZoomOut() { this._map.zoomOut(); }
  public onZoomToState() { this._map.fitBounds(MAP_BOUNDARY, { animate: false }); }
  public onZoomToCurrent() {
    const coordinates: number[][] = [...this._coordinates];
    if (this._marker) {
      const lngLat: mapbox.LngLat = this._marker.getLngLat();
      if (lngLat) {
        coordinates.push([lngLat.lng, lngLat.lat])
      }
    }
    this._fitToFeatures(this._map, coordinates);
  }

  /**
   *
   * @param crashEvent
   * @private
   */

  private async _initMap(): Promise<void> {
    const map = this._createMapObject(17);

    map.on('load', async () => {
      await this._addSources(map, this._getNewFeatureCollection());
      await this._addLayers(map);
      map.fitBounds(MAP_BOUNDARY, { animate: false });


      map.on('click', (e) => {
        if (!e.hasOwnProperty('lngLat') || this._geocoder.mode$.value === '' || !this.currentRecord) {
          return;
        }
        this._addDragableMarker(e.lngLat)
      });

      this._map = map;
      if (this._hasARecordWaiting) {
        this._loadRecord();
      }
    })
  }

  /**
  *
  * @private
  */
  private _addDragableMarker(point: mapbox.LngLat) {
    if (this._marker) { this._marker.remove(); this._marker = undefined; }
    if (this._ghostMarker) { this._ghostMarker.remove(); this._ghostMarker = undefined; }

    const marker = new mapbox.Marker({
      draggable: true,
      color: ETL_STATUS['Officer Mapped'][1]
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
            ETL_STATUS['Officer Mapped'],
            ETL_STATUS['Computer Confident'],
            ETL_STATUS['Computer Tie'],
            ETL_STATUS['Computer Approximate'],
            ETL_STATUS['Lat Long Plot']
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
  private _clearMap() {
    this._geocoder.mode$.next('');
    if (this._marker) { this._marker.remove(); this._marker = undefined; }
    if (this._ghostMarker) { this._ghostMarker.remove(); this._ghostMarker = undefined; }
    if (this._map) {
      const streetLayer = this._map.getLayer('streets-selected');
      if (streetLayer) {
        this._map.setLayoutProperty('streets-selected', 'visibility', 'none');
        this._map.setFilter('streets-selected', null);
      }
      this._updateGeoJSONSource(this._getNewFeatureCollection());
    }
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

  private async _createGeoJSONFeatures(crashEvent: CrashEvent): Promise<FeatureCollection> {
    let featureCollection: any = this._getNewFeatureCollection();
    if (crashEvent && crashEvent.geocoding) {
      let etlStatus = crashEvent.geocoding.etlGeoLocationStatus;
      console.log(etlStatus);
      if (etlStatus !== 'Not Mapped') {
        const etlStatusCode = etlStatus ? ETL_STATUS[etlStatus][0] : 0;
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
      }
      if (crashEvent.originalLng && crashEvent.originalLat) {
        featureCollection.features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [crashEvent.originalLng, crashEvent.originalLat]
          },
          properties: {
            etlStatus: 5
          }
        })
      }
    }
    return featureCollection;
  }

  private _fitToFeatures(map: mapbox.Map, coordinates: number[][]) {
    if(coordinates.length === 0) {
      this.onZoomToState();
      return;
    }
    let ne: any = [...MAP_BOUNDARY[0]],
      sw: any = [...MAP_BOUNDARY[1]];

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
    map.fitBounds(bounds, { padding: { top: 150, left: 150, right: 150, bottom: 150 }, animate: false });
  }

  private _getNewFeatureCollection(): FeatureCollection {
    return {
      features: [],
      type: 'FeatureCollection'
    };
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
  private async _loadRecord() {
    if (this._map && this.currentRecord) {
      this._hasARecordWaiting = false;
      await this._createGeoJSONFeatures(this.currentRecord).then(featureCollection => {
        this._featureCollection = featureCollection;
        this._updateGeoJSONSource(featureCollection);
        this._fitToFeatures(this._map, this._coordinates);
      });
    } else if (!this._map) {
      this._hasARecordWaiting = true;
    }
  }

  private _setCursor(mode: string): void {
    // this.mapElement.nativeElement.className += ' ' + mode;
  }

  private _updateGeoJSONSource(data: FeatureCollection) {
    let source = this._map.getSource('crash-point-source') as mapbox.GeoJSONSource;
    if (source) { source.setData(data); }
  }
}
