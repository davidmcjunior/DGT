import { CrashNarrative } from './crash-narrative';
import { CrashDiagram } from './crash-diagram';
import { S4User } from '../s4-user';
import { CrashEventOptions } from './crash-event-options';
import { Geocoding, EditedGeocoding } from './geocoding';

export class CrashEvent {
  // HSMV Report Number – an identifying number, unique statewide, that is assigned by the Florida Department of Highway Safety and Motor Vehicles to each Traffic Crash Report.
  hsmvReportNumber: number;

  // Street Address Number – house number
  streetAddressNumber: number;

  // Crash Date – the date on which a crash event occurred
  // Note: Date(string) takes an ISO 8601-defined format string: https://www.w3.org/TR/NOTE-datetime
  crashDate: Date;

  // County – the County in which the crash occurred
  county: string;

  // City – the City in which the crash occurred
  city: string;

  // On Street – the street name on which vehicle 1 was traveling prior to the crash
  onStreet: string;

  // Intersecting Street – the street name of the nearest intersecting street, for reference
  intersectingStreet: string;

  // Offset Distance – the distance from the nearest intersection to the crash point
  offsetDistance: number;

  // Offset Direction – the direction from the nearest intersection to the crash point
  offsetDirection: string;

  // Crash Severity – the maximum injury severity for any driver, passenger or non-motorist involved
  crashInjury: number;

  // Road System Identifier – the primary road system identifier:
  roadwaySystemId: number;

  // Form Type
  formType: string;

  // Bicyclist Count – a count of non-motorists having description of 3 – Bicyclist or 4 – Other Cyclist
  bicyclistCount: number | undefined;

  // Pedestrian Count – a count of non-motorists having description of 1 – Pedestrian or 2 – Other Pedestrian
  pedestrianCount: number | undefined;

  // Pool Id – identifies an administrative pool
  poolId: number | undefined;

  // User Id – identifies a Signal4 user
  user: S4User | undefined;

  // Edit Date
  editDate: Date | undefined;

  // Edit Status
  editStatus: Date | undefined;

  // Review Date
  reviewDate: Date | undefined;

  // Review Status
  reviewStatus: Date | undefined;

  // Site Location
  siteLocation: number | undefined;

  // Location Only Code
  onPublicRoads: string | undefined;

  dotProperty: boolean | undefined;

  // Side of Road
  sideOfRoad: string | undefined;

  // Crash Lane
  crashLane: string | undefined;

  numberOfLanes: number | undefined;

  ownership: string | undefined;

  routeSignage: string | undefined;

  postedSpeedLimit: string | undefined;

  functionalClass: string | undefined;

  // Narrative – describes the crash scene, including the sequence of events prior to, at, and post
  // collision for each vehicle, driver, and non-motorist
  narrative: CrashNarrative | undefined;

  // Diagram – an illustration of the crash scene, including road names, width of each lane and road
  // markings, any physical evidence on the roadway, and each vehicle’s position prior to, at, and post collision.
  diagram: CrashDiagram | undefined;

  originalGeocoding: Geocoding | undefined;

  editedGeocodings?: EditedGeocoding[];

  constructor(opts: CrashEventOptions) {
    this.hsmvReportNumber = opts.hsmvReportNumber;
    this.streetAddressNumber = opts.streetAddressNumber;
    this.crashDate = opts.crashDate;
    this.county = opts.county;
    this.city = opts.city;
    this.onStreet = opts.onStreet;
    this.intersectingStreet = opts.intersectingStreet;
    this.offsetDistance = opts.offsetDistance;
    this.offsetDirection = opts.offsetDirection;
    this.crashInjury = opts.crashInjury;
    this.roadwaySystemId = opts.roadwaySystemId;
    this.formType = opts.formType;
    this.bicyclistCount = opts.bicyclistCount || undefined;
    this.pedestrianCount = opts.pedestrianCount || undefined;
    this.poolId = opts.poolId || undefined;
    this.user = opts.user || undefined;
    this.editDate = opts.editDate || undefined;
    this.editStatus = opts.editStatus || undefined;
    this.reviewDate = opts.reviewDate || undefined;
    this.routeSignage = opts.routeSignage || undefined;
    this.reviewStatus = opts.reviewStatus || undefined;
    this.siteLocation = opts.siteLocation || undefined;
    this.onPublicRoads = opts.offNetwork || undefined;
    this.functionalClass = opts.functionalClass || undefined;
    this.sideOfRoad = opts.sideOfRoad || undefined;
    this.crashLane = opts.crashLane || undefined;
    this.narrative = opts.narrative || undefined;
    this.diagram = opts.diagram || undefined;
    this.originalGeocoding = opts.originalGeocoding || undefined;
  }
}
