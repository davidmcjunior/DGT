import { clusterLayer, crashPointSource, crashPointLayer, extrudeLayer, extrudeSource, heatmapLayer, highlightedSegmentLayer, highlightedSegmentSource, S4_TEAL, S4_BLUE, S4_RED, S4_YELLOW, heatPointLayer, S4_GREEN, S4_ORANGE } from '../constants';
export let crashSeverityColors: string[] = [S4_TEAL, S4_BLUE, S4_RED];

export function crashSource(featureCollection: any, isClustered: boolean): { type: string, data: any, cluster: boolean, clusterMaxZoom: number, clusterRadius: number } {
    return {
        type: 'geojson',
        data: featureCollection,
        cluster: isClustered,
        clusterMaxZoom: 10,
        clusterRadius: 50,
    };
}


let crashSeverityColorProperties: any = {
    // point radius grows zoom,size to zoom,size
    'circle-radius': [
        'interpolate', ['linear'], ['zoom'],
        5, 5, 10, 5, 16, 10, 22, 15
    ],
    'circle-color': {
        property: 'crashSevCd',
        stops: [
            [30, crashSeverityColors[0]], // * property damage only
            [31, crashSeverityColors[1]], // * injury
            [32, crashSeverityColors[2]]] // * fatalities
    }
};

export let clusterLayerDef: any = {
    id: clusterLayer,
    type: 'circle',
    source: crashPointSource, // current features
    filter: ['has', 'point_count'],
    paint: {
        'circle-radius': ['max', 9, ['/', ['+', ['*', ['ln', ['*', ['get', 'point_count'], 0.1]], 10], 20], 2]],
        'circle-color': S4_BLUE,
        'circle-opacity': 0.8
    }
};

export let extrusionLayer: any = {
    id: extrudeLayer,
    type: 'fill-extrusion',
    source: extrudeSource,
    minzoom: 20,
    paint: {
        'fill-extrusion-height': ['*', ['get', 'extrudeCnt'], 0.75],
        'fill-extrusion-base': ['+', -0.5, ['*', ['get', 'extrudeCnt'], 0.75]],
        'fill-extrusion-color': crashSeverityColorProperties
    }
};


export const thematicMapLayer: any = {
    id: 'thematic-map',
    type: 'fill',
    source: 'thematic-source',
    paint: {

    }
};

export const thematicMapExtrusionLayer: any = {
    id: 'thematic-map-extrusion',
    type: 'fill-extrusion',
    source: 'thematic-source',
    paint: {
        'fill-extrusion-color': ['step', ['get', 'count'], '#80FFE1', 0, '#80FFE1', 1000, '#40E1E6', 2000, '#6BD2FA', 3000, '#609FE6', 5000, '#2F5BFA', 10000, '#2F5BFA'],
        'fill-extrusion-height': ['step', ['get', 'count'], 500, 500, 1000, 1000, 1500, 1500, 2000, 2000, 5000, 5000, 10000, 10000, 20000]
    }
};


export const heatLayers: any[] = [{
    id: heatmapLayer,
    type: 'heatmap',
    source: crashPointSource,
    layout: {
        visibility: 'none'
    },
    paint: {
        // Increase the heatmap color weight weight by zoom level
        // heatmap-intensity is a multiplier on top of heatmap-weight
        'heatmap-intensity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0, 0.000001,
            10, .75,
            15, 1.5
        ],
        // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
        // Begin color ramp at 0-stop with a 0-transparancy color
        // to create a blur-like effect.
        'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0, 'rgba(22,155,255,0)',
            0.2, S4_BLUE,
            0.4, S4_GREEN,
            0.6, S4_YELLOW,
            0.8, S4_ORANGE,
            1, S4_RED
        ],
        // Adjust the heatmap radius by zoom level
        'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0, 1,
            4, 1,
            10, 12,
            12, 20, 22, 50
        ],
        // Transition from heatmap to circle layer by zoom level
        'heatmap-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0, .7,
            11, 0.5,
            13, 0
        ],
    }
},
{
    id: heatPointLayer,
    type: 'circle',
    source: crashPointSource, // current features
    minZoom: 11,
    filter: ['!', ['has', 'point_count']],
    paint: {
        // 'circle-stroke-color': S4_DARK,
        // 'circle-stroke-width': 0.21,
        ...crashSeverityColorProperties,
        // 'circle-color': S4_BLUE
        // ,
        // 'circle-radius': [
        //   'interpolate', ['linear'], ['zoom'],
        //   0, 2,
        //   5, 3,
        //   10, 3,
        //   20, 15
        // ],
        'circle-opacity': {
            stops: [
                [11, 0],
                [12, 1]
            ]
        },

    }
}];

export let highlightedSegmentsLayer: any = {
    'id': highlightedSegmentLayer,
    'type': 'line',
    'source': highlightedSegmentSource,
    'layout': {
        'line-join': 'round',
        'line-cap': 'round'
    },
    'paint': {
        'line-color': S4_YELLOW,
        'line-width': 1.41
    }
};

export let pointLayer: any = {
    id: crashPointLayer,
    type: 'circle',
    source: crashPointSource, // current features
    filter: ['!', ['has', 'point_count']],
    paint: crashSeverityColorProperties
};
