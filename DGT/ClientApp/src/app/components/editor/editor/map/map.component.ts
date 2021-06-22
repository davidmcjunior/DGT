import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { EsriLeafletMapService } from 'app/services/leaflet/esri-leaflet-map.service';
import { SearchComponent } from 'app/components/editor/editor/map/search/search.component';
import { MapboxService as MapService } from 'app/services/mapbox/mapbox.service';
import { Location } from 'app/models/geolocation/location';
import { ReverseGeocodeService } from 'app/services/s4/reverse-geocode.service';

@Component({
  selector: 'dgt-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  @ViewChild(SearchComponent) searchComponent: SearchComponent;
  @Output('markerPlaced') markerPlaced = new EventEmitter<any>();

  constructor(private mapService: MapService, private reverseGeocodeService: ReverseGeocodeService) { }

  ngAfterViewInit(): void {
    this.mapService.initMap();
    this.reverseGeocodeService.getAttributes();
  }

  onLocationChanged(newLocation: Location): void {
    this.mapService.flyTo(newLocation);
  }

  onMarkerPlaced($event: Event): void {
    this.markerPlaced.emit($event);
  }
}
