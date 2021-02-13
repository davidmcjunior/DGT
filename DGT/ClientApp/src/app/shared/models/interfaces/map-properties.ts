import { FeatureDisplayMode, BaseMapType } from '../enums';

export interface MapProperties {
    id: string;
    class: string;
    center: mapboxgl.LngLatLike;
    baseMap: BaseMapType;
    featureDisplayMode: FeatureDisplayMode;
    zoom: number;
    minZoom: number;
    maxZoom: number;
    maxPitch: number;
    dragToRotate: boolean;
    boundaries: mapboxgl.LngLatBoundsLike;

}
