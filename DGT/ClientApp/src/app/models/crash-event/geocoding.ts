// Definition: The result of the automatic batch geocoding process by which a computer
// algorithm attempts to translate the textual description of a crash location into an
// unambiguous point on the Florida All Roads Base Map (ARBM) including explicit
// relationships to the nearest roadway segment, nearest intersection, and offset
// distance and direction from the nearest intersection.
import { Editor } from 'app/models/users/editor';
import {MapPoint} from "../geolocation/map-point";

export interface Geocoding {
  hsmvReportNumber: number;
  mapPoints: MapPoint[];
  createDate?: Date | undefined;
  lastUpdateDate?: Date | undefined;
  etlGeoLocationStatus: string;
  relationShipToNetwork?: string;
  centerlineX?: number;
  centerlineY?: number;
  matchStatusCode?: string;
  matchResultCode?: number;
  failReasonCode?: string;
  crashSegmentId?: string;
  nearestIntersectionId?: string;
  nearestIntersectionOffsetFeet?: number;
  nearestIntersectionOffsetDirection?: string;
  mapped?: boolean;
  onNetwork?: boolean;
  author?: string;
}

export interface EditedGeocoding extends Geocoding {
  poolId?: number;
  userId?: number;
  fdotGeocodeStatus?: string;
  comments?: string;
  createUser?: Editor;
  lastUpdateUser?: Editor;
}
