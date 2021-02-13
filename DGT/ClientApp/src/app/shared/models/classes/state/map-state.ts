import { BaseMapType, FeatureDisplayMode } from '../../enums';
import { BaseMap, MapProperties } from '../../interfaces';
import { CrashResult } from '../crash-result';
import { EventFeatureSet } from '../event-feature-set';
import { ViewType } from 'src/app/shared/constants';

export class MapState {
  baseMaps: BaseMap[] = [
    { type: BaseMapType.Aerial, image: 'images/event-analysis/aerial_50.png', style: 'mapbox://styles/mapbox/satellite-streets-v11' },
    { type: BaseMapType.Cartographic, image: 'images/event-analysis/cartographic_50.png', style: 'mapbox://styles/mapbox/streets-v11' },
    { type: BaseMapType.Dark, image: '', style: 'mapbox://styles/mapbox/dark-v11' },
    { type: BaseMapType.Grayscale, image: 'images/event-analysis/grayscale_50.png', style: 'mapbox://styles/signalfourlab/ckc0w16zw0u9m1iqnxlgchj5n?fresh=true' }
  ];
  baseMapType: BaseMapType;
  crashResult?: CrashResult;
  currentCustomArea: Coordinates[];
  currentExtent: number[];
  currentFeatureSet: EventFeatureSet;
  currentPoint: number[];
  currentZoom: number;
  customLayers: [];
  customSources: [];
  defaultBaseMapType: BaseMapType = BaseMapType.Cartographic;
  defaultExtent: number[];
  defaultFeatureDisplayMode: FeatureDisplayMode = FeatureDisplayMode.Auto;
  displayingPoints: boolean;
  featureDisplayMode: FeatureDisplayMode;
  intersectionCache: {};
  loading: boolean;
  mapExtentChange: boolean;
  mapInitialized: boolean;
  mapLoaded: boolean;
  mapProperties: MapProperties;
  pickingIntersection: boolean;
  pickingStreet: boolean;
  reloadData: boolean;
  segmentCache: {};
  view: ViewType;

  // shouldClearVectorGraphics = false;
  constructor() {
    this.baseMapType = this.defaultBaseMapType;
    this.currentCustomArea = [];
    this.currentExtent = this.defaultExtent;
    this.currentPoint = [];
    this.customLayers = [];
    this.customSources = [];
    this.displayingPoints = true;
    this.featureDisplayMode = this.defaultFeatureDisplayMode;
    this.intersectionCache = {};
    this.loading = false;
    this.mapExtentChange = false;
    this.mapInitialized = false;
    this.mapLoaded = false;
    this.pickingIntersection = false;
    this.pickingStreet = false;
    this.reloadData = true;
    this.segmentCache = {};
  }
}
