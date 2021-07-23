import { CrashNarrative } from './crash-narrative';
import { CrashDiagram } from './crash-diagram';
import { S4User } from '../s4-user';
import { Geocoding, EditedGeocoding } from './geocoding';

export interface CrashEvent {
  hsmvReportNumber: number;
  streetAddressNumber: number;
  county: string;
  city: string;
  onStreet: string;
  intersectingStreet: string;
  offsetDistance: number;
  offsetDirection: string;
  crashInjury: number;
  roadwaySystemId: number;
  formType: string;
  bicyclistCount: number | undefined;
  pedestrianCount: number | undefined;
  poolId: number | undefined;
  user: S4User | undefined;
  editDate: Date | undefined;
  editStatus: Date | undefined;
  originalLat?: number | undefined;
  orifinalLng?: number | undefined;
  reviewDate: Date | undefined;
  reviewStatus: Date | undefined;
  siteLocation: number | undefined;
  onPublicRoads: string | undefined;
  dotProperty: boolean | undefined;
  sideOfRoad: string | undefined;
  crashLane: string | undefined;
  numberOfLanes: number | undefined;
  ownership: string | undefined;
  routeSignage: string | undefined;
  postedSpeedLimit: string | undefined;
  functionalClass: string | undefined;
  narrative: CrashNarrative | undefined;
  diagram: CrashDiagram | undefined;

  geocoding: Geocoding | undefined;

  editedGeocodings?: EditedGeocoding[];
}
