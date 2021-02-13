
let staticMode: any = {};
staticMode.onSetup = function () {
    this.setActionableState(); // default actionable state is false for all actions
    return {};
};

staticMode.toDisplayFeatures = function (state: any, geojson: any, display: (geo: any) => void) {
    display(geojson);
};
// tslint:disable-next-line:variable-name
export const StaticMode = staticMode;
