import { BaseMapType, FeatureDisplayMode } from '../models/enums';
import { MapProperties } from '../models/interfaces';


export let analysisMap: MapProperties = {
    id: 'mapbox',
    class: 's4-map-overlayed',
    center: <mapboxgl.LngLatLike>[-83.21, 27.945], // starting position [lng, lat]
    baseMap: BaseMapType.Grayscale,
    featureDisplayMode: FeatureDisplayMode.Heat,
    zoom: 5.2,
    minZoom: 5.2,
    maxZoom: 20,
    maxPitch: 0,
    dragToRotate: true,
    boundaries: <mapboxgl.LngLatBoundsLike>[
        [-99.000, 18.205],
        [-65.000, 34.047]
    ]
};


export let dashboardMap: MapProperties = {
    id: 'dashMap',
    class: 's4-map-framed',
    center: <mapboxgl.LngLatLike>[
        -83.19, 28.14710909682995
    ], // starting position [lng, lat]
    featureDisplayMode: FeatureDisplayMode.Heat,
    baseMap: BaseMapType.Grayscale,
    zoom: 5,
    minZoom: 5.2,
    maxZoom: 11,
    maxPitch: 0,
    dragToRotate: false,
    boundaries: <mapboxgl.LngLatBoundsLike>[
        [-99.000, 18.205],
        [-65.000, 34.047]
    ]
};
