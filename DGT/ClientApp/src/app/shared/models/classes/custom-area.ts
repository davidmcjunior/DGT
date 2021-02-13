import * as mapboxgl from 'mapbox-gl';
import { Feature } from 'geojson';
export class CustomArea {
    polygon: mapboxgl.MapboxGeoJSONFeature | Feature;
    name: string;
    coordinates: Coordinates[];
    id: number;

    constructor(poly: Feature, n: string) {
        this.polygon = poly;
        this.name = n;
    }
}
