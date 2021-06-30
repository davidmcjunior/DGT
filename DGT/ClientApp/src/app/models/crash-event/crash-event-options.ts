import { S4User } from '../s4-user';
import { CrashNarrative } from './crash-narrative';
import { CrashDiagram } from './crash-diagram';
import { EditedGeocoding, Geocoding } from './geocoding';

export interface CrashEventOptions {
  hsmvReportNumber: number;
  streetAddressNumber: number;
  crashDate: Date;
  county: string;
  city: string;
  onStreetName: string;
  intersectingStreetName: string;
  offsetDistance: number;
  offsetDirection: string;
  crashSeverity: number;
  roadwaySystemId: number;
  formType: string;
  bicyclistCount?: number | undefined;
  pedestrianCount?: number | undefined;
  poolId?: number | undefined;
  user?: S4User | undefined;
  editDate?: Date | undefined;
  editStatus?: Date | undefined;
  reviewDate?: Date | undefined;
  reviewStatus?: Date | undefined;
  siteLocation?: number | undefined;
  offNetwork?: string | undefined;
  postedSpeedLimit?: string | undefined;
  functionalClass?: string | undefined;
  routeSignage?: string | undefined;
  fdotPropertyCode?: string | undefined;
  sideOfRoad?: string | undefined;
  crashLane?: string | undefined;
  narrative?: CrashNarrative | undefined;
  diagram?: CrashDiagram | undefined;
  originalGeocoding?: Geocoding;
  editedGeocodings?: EditedGeocoding[];
}
