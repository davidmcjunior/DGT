// csv header names
export let hsmvHeaderName = 'hsmv_crash_report_number';
export let agencyHeaderName = 'reporting_agency_case_number';

// ui constants
export let selectedState = 'selected';
export let unselectedState = 'unselected';
export let hidePanelState = 'hidePanel';
export let hidePanelAndPaneState = 'hidePanelAndPane';
export let showPanelState = 'showPanel';
export let paneOpenState = 'paneOpen';
export let paneClosedState = 'paneClosed';
export let panelClosedState = 'panelClosed';
export let panelOpenState = 'panelOpen';
export let panelClosedState2 = 'panelClosed2';


// constants for mapbox layer/source names
export const crashPointLayer = 'crashPointLayer';
export const crashPointSource = 'crashPointSource';
export const clusterLayer = 'clusterLayer';
export const extrudeLayer = 'extrude';
export const extrudeSource = 'extrudeSource';
export const heatmapLayer = 'heatmapLayer';
export const heatPointLayer = 'heatPointLayer';
export const highlightedSegmentLayer = 'highlightedSegmentLayer';
export const highlightedSegmentSource = 'highlightedSegmentSource';
export const cityBoundarySource = 'CITY_Project_Ext-b9d38l';
export const countyBoundarySource = 'County_Project_Ext-4wt4v9';
export const dotBoundarySource = 'DOT_Project_Ext-80mgjm';
export const mpoBoundarySource = 'MPO_Project_Ext-2qfuvd';
export let dotBoundaries = 'dot-boundaries';
export let cityBoundaries = 'city-boundaries';
export let countyBoundaries = 'cnty-boundaries';
export let mpoBoundaries = 'mpo-boundaries';
export let dotLabelLayer = 'dot-centroid-3598vt';
export let countyLabelLayer = 'county-centroid-ary5dt';
// map variables
export let multipointClusterDist = 2;
export let minPointClusterResolution = 5.0;
export let maxPoints = 10000; // the maximum number of points at which Point mode is enabled
export let minClusterSize = 12;
export let minClusterCount = 10;
export let minPointRadius = 5;
export let maxPointRadius = 10;
export let minPointSymbolResolution = 3.0; // resolution where crash type symbology is visible
