let drawRectangle: any = {};

let doubleClickZoom = {
    enable: (ctx: { map: { doubleClickZoom: { enable: () => void; }; }; _ctx: { store: { getInitialConfigValue: (arg0: string) => any; }; }; }) => {
        setTimeout(() => {
            // First check we've got a map and some context.
            if (
                !ctx.map ||
                !ctx.map.doubleClickZoom ||
                !ctx._ctx ||
                !ctx._ctx.store ||
                !ctx._ctx.store.getInitialConfigValue
            ) {
                return;
            }
            // Now check initial state wasn't false (we leave it disabled if so)
            if (!ctx._ctx.store.getInitialConfigValue('doubleClickZoom')) { return; }
            ctx.map.doubleClickZoom.enable();
        }, 0);
    },
    disable(ctx: { map: { doubleClickZoom: { disable: () => void; }; }; }) {
        setTimeout(() => {
            if (!ctx.map || !ctx.map.doubleClickZoom) { return; }
            // Always disable here, as it's necessary in some cases.
            ctx.map.doubleClickZoom.disable();
        }, 0);
    }
};

drawRectangle.onSetup = function (opts: any) {
    let rectangle = this.newFeature({
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'Polygon',
            coordinates: [[]]
        }
    });
    this.addFeature(rectangle);
    this.clearSelectedFeatures();
    doubleClickZoom.disable(this);
    this.updateUIClasses({ mouse: 'add' });
    this.setActionableState({
        trash: true
    });
    return {
        rectangle
    };
};
// support mobile taps
drawRectangle.onTap = function (state: { startPoint: any; }, e: any) {
    // emulate 'move mouse' to update feature coords
    if (state.startPoint) { this.onMouseMove(state, e); }
    // emulate onClick
    this.onClick(state, e);
};
// drawRectangle.onDrag = function (state: any, e: any) {
//     console.log('i am the drag event ', state, e)
// };

// drawRectangle.onMouseDown = function (state: any, e: any) {
//     state.isMouseDown = true;
// };
// drawRectangle.onMouseUp = function (state: any, e: any) {
//     state.isMouseDown = false;
// }

// Whenever a user clicks on the map, Draw will call `onClick`
drawRectangle.onClick = function (state: { startPoint: any[]; endPoint: any[]; rectangle: { id: any; }; }, e: { lngLat: { lng: any; lat: any; }; }) {
    // if state.startPoint exist, means its second click
    // change to  simple_select mode
    if (
        state.startPoint &&
        state.startPoint[0] !== e.lngLat.lng &&
        state.startPoint[1] !== e.lngLat.lat
    ) {
        this.updateUIClasses({ mouse: 'pointer' });
        state.endPoint = [e.lngLat.lng, e.lngLat.lat];
        this.changeMode('simple_select', { featuresId: state.rectangle.id });
    }
    // on first click, save clicked point coords as starting for  rectangle
    const startPoint = [e.lngLat.lng, e.lngLat.lat];
    state.startPoint = startPoint;
};

drawRectangle.onMouseMove = function (state: any, e: any) {
    // if startPoint, update the feature coordinates, using the bounding box concept
    // we are simply using the startingPoint coordinates and the current Mouse Position
    // coordinates to calculate the bounding box on the fly, which will be our rectangle

    if (state.startPoint) {
        state.rectangle.updateCoordinate(
            '0.0',
            state.startPoint[0],
            state.startPoint[1]
        ); // minX, minY - the starting point
        state.rectangle.updateCoordinate(
            '0.1',
            e.lngLat.lng,
            state.startPoint[1]
        ); // maxX, minY
        state.rectangle.updateCoordinate('0.2', e.lngLat.lng, e.lngLat.lat); // maxX, maxY
        state.rectangle.updateCoordinate(
            '0.3',
            state.startPoint[0],
            e.lngLat.lat
        ); // minX,maxY
        state.rectangle.updateCoordinate(
            '0.4',
            state.startPoint[0],
            state.startPoint[1]
        ); // minX,minY - ending point (equals to starting point)
    }
};
// Whenever a user clicks on a key while focused on the map, it will be sent here
drawRectangle.onKeyUp = function (state: any, e: { keyCode: number; }) {
    if (e.keyCode === 27) { return this.changeMode('simple_select'); }
},
    drawRectangle.onStop = function (state: { rectangle: { id: any; removeCoordinate: (arg0: string) => void; isValid: () => any; toGeoJSON: () => any; }; }) {
        doubleClickZoom.enable(this);
        this.updateUIClasses({ mouse: 'none' });
        this.activateUIButton();

        // check to see if we've deleted this feature
        if (this.getFeature(state.rectangle.id) === undefined) { return; }

        // remove last added coordinate
        state.rectangle.removeCoordinate('0.4');
        if (state.rectangle.isValid()) {
            this.map.fire('draw.create', {
                features: [state.rectangle.toGeoJSON()]
            });
        } else {
            this.deleteFeature([state.rectangle.id], { silent: true });
            this.changeMode('simple_select', {}, { silent: true });
        }
    };

drawRectangle.toDisplayFeatures = function (state: { rectangle: { id: any; }; startPoint: any; }, geojson: { properties: { id: any; active: string; }; }, display: (arg0: any) => any) {
    const isActivePolygon = geojson.properties.id === state.rectangle.id;
    geojson.properties.active = isActivePolygon ? 'true' : 'false';
    if (!isActivePolygon) { return display(geojson); }

    // Only render the rectangular polygon if it has the starting point
    if (!state.startPoint) { return; }
    return display(geojson);
};
drawRectangle.onTrash = function (state: { rectangle: { id: any; }; }) {
    this.deleteFeature([state.rectangle.id], { silent: true });
    this.changeMode('simple_select');
};

// tslint:disable-next-line:variable-name
export const DrawRectangle = drawRectangle;
