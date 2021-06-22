import { Injectable } from '@angular/core';
import { IMapService } from 'app/models/interfaces/mapservice.interface';
import 'leaflet/dist/leaflet.css';
// @ts-ignore
import * as L from 'leaflet';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder';
// @ts-ignore
import * as ELG from 'esri-leaflet-geocoder';


@Injectable({
  providedIn: 'root'
})
export class EsriLeafletMapService implements IMapService {
  private map: any;
  private marker: any;
  private x = 27.773056;
  private y = -84.639999;
  private z = 7;

  public initMap(): void {
    this.map = L.map('map').setView([this.x, this.y], this.z);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const searchControl = new ELG.Geosearch();
    const results = new L.LayerGroup().addTo(this.map);

    searchControl
      .on('results', (data: { results: string | any[]; }) => {
        results.clearLayers();

        for (let i = data.results.length - 1; i >= 0; i--) {
          results.addLayer(L.marker(data.results[i].latlng));
        }
      })
      .addTo(this.map);

    console.log(new ELG.ReverseGeocode());
    // @ts-ignore
    this.map.on('click', (e) => {
      // @ts-ignore
      new ELG.ReverseGeocode().latlng(e.latlng).run((error, result) => {
        if (error) {
          return;
        }

        if (this.marker && this.map.hasLayer(this.marker)) {
          this.map.removeLayer(this.marker);
        }

        this.marker = L.marker(result.latlng)
          .addTo(this.map)
          .bindPopup(result.address.Match_addr)
          .openPopup();
      });
    });
  }

}
