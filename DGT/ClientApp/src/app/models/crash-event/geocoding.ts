// Definition: The result of the automatic batch geocoding process by which a computer
// algorithm attempts to translate the textual description of a crash location into an
// unambiguous point on the Florida All Roads Base Map (ARBM) including explicit
// relationships to the nearest roadway segment, nearest intersection, and offset
// distance and direction from the nearest intersection.
import { Editor } from 'app/models/users/editor';

export interface Geocoding {
  hsmvReportNumber: number;

  // Map Point X – x-coordinate of the crash point (initial point of impact)
  mapPointX: number;

  // Map Point Y – y-coordinate of the crash point (initial point of impact)
  mapPointY: number;

  // Create Date – date on which the record was created
  createDate: Date | undefined;

  // Last Update Date – date on which the record was last updated
  lastUpdateDate: Date | undefined;

  // ETL Geocode Status – the outcome of the Signal4 automatic batch geocoding process:
  etlGeoLocationStatus: string;

  // Relationship to Network – the relationship between a crash point and the roadway network
  relationShipToNetwork: string;

  // Centerline X – x-coordinate of the crash point snapped to the nearest centerline
  centerlineX: number;

  // Centerline Y – y-coordinate of the crash point snapped to the nearest centerline
  centerlineY: number;

  // Match Status Code
  matchStatusCode: string;

  // Match Result Code
  matchResultCode: number;

  // Fail Match Reason Code
  failReasonCode: string;

  // Crash Segment Id – link id of the nearest perpendicular road segment
  crashSegmentId: string;

  // Nearest Intersection Id – the id of the nearest intersection
  nearestIntersectionId: string;

  // Nearest Intersection Offset Feet – the distance from the nearest intersection to the crash point
  nearestIntersectionOffsetFeet: number;

  // Nearest Intersection Offset Direction – the direction from the nearest intersection to the crash point
  nearestIntersectionOffsetDirection: string;

  // Mapped – Y if leaflet point x and leaflet point y are not null and not zero, otherwise N
  mapped: boolean;

  // On Network – Y if crash segment id is not null and not zero, otherwise N
  onNetwork?: boolean;

  // Author – the person or program that performed the geocoding
  author?: string;
}

export interface EditedGeocoding extends Geocoding {
  // Pool Id – identifies an administrative pool.
  poolId?: number;

  // User Id – identifies a Signal4 user who proposes the updates to the record.
  userId?: number;

  // FDOT Geocode Status – the geocoding status resulting from FDOT review and edit of the results of the S4 automatic batch geocoder.
  fdotGeocodeStatus?: string;

  // Comments
  comments?: string;

  createUser?: Editor;

  lastUpdateUser?: Editor;
}
