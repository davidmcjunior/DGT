export class QueryRef {
    queryToken: string;
    extent: {
        minX: number,
        minY: number,
        maxX: number,
        maxY: number
    };
    mappedCount: number;
    unmappedCount: number;
    totalCount: number;
    firstTime: boolean;  // TODO:  should be defined on map service
    errorMessage: string;
}

export class DateTimeScope {
    dateRange: {
        startDate: Date,
        endDate: Date
    };
    dayOfWeek?: number[];
    timeRange?: {
        startTime: Date,
        endTime: Date
    };
}

export class PlaceScope {
    county?: number[];
    city?: number[];

    reset() {
        this.county = undefined;
        this.city = undefined;
    }
}
export interface InjurySeverity {
    fatality?: boolean;
    seriousInjury?: boolean;
    injury?: boolean;
    propDamageOnly?: boolean;
}
export interface UsersInvolved {
    pedestrians?: boolean;
    bicyclists?: boolean;
    motorcyclists?: boolean;
}
export interface DrivingBehavior {
    aggressiveDriving?: boolean;
    alcohol?: boolean;
    distracted?: boolean;
    drugs?: boolean;
    speeding?: boolean;
    unrestrainedOccupant?: boolean;
}

export interface DriversInvolved {
    teenageDriver?: boolean;
    agingDriver?: boolean;
}

export interface EmphasisSites {
    laneDeparture?: boolean;
    intersectionRelated?: boolean;
    workZone?: boolean;
}

export interface VehiclesInvolved {
    cmv?: boolean;
    schoolBus?: boolean;
}
export interface Environment {
    night?: boolean;
    rain?: boolean;
}
export interface CrashType {
    angle?: boolean;
    animal?: boolean;
    headOn?: boolean;
    leftTurn?: boolean;
    offRoad?: boolean;
    other?: boolean;
    rearEnd?: boolean;
    rightTurn?: boolean;
    rollover?: boolean;
    sideswipe?: boolean;
    unknown?: boolean;
}
export interface RoadSystem {
    interstate?: boolean;
    us?: boolean;
    state?: boolean;
    county?: boolean;
    local?: boolean;
    turnpikeToll?: boolean;
    forrestRoad?: boolean;
    privateRoadway?: boolean;
    other?: boolean;
}
export interface OtherCircumstances {
    hitAndRun?: boolean;
    longForm?: boolean;
    shortForm?: boolean;
    codeable?: boolean;
}
export interface QueryFilters {
    injurySeverity?: InjurySeverity;
    usersInvolved?: UsersInvolved;
    drivingBehavior?: DrivingBehavior;
    driversInvolved?: DriversInvolved;
    emphasisSites?: EmphasisSites;
    vehiclesInvolved?: VehiclesInvolved;
    environment?: Environment;
    crashType?: CrashType;
    roadSystem?: RoadSystem;
    other?: OtherCircumstances;
}
export class CrashQuery {
    dotDistrict?: string[];
    mpoTpo?: string[];
    customArea?: {
        x: number,
        y: number
    }[];
    customExtent?: {
        minX: number,
        minY: number,
        maxX: number,
        maxY: number
    };
    reportingAgency?: number[];

    // Record Number Search
    hsmvReportNumbers?: number[];
    agencyReportNumbers?: string[];
    citationReportNumbers?: string[];


    /// / * BEGIN ATTRIBUTES
    injurySeverity?: InjurySeverity;

    roadSystemIdentifier?: number[];

    dayOrNight?: string[];
    weatherCondition?: number[];

    crashTypeSimple?: string[];

    cmvInvolved?: boolean;

    bikePedInvolved?: {
        pedInvolved?: boolean,
        bikeInvolved?: boolean,
    };

    behavioralFactors?: {
        aggressiveDriving?: boolean;
        alcohol?: boolean,
        drugs?: boolean,
        distraction?: boolean,
    };
    unrestrainedOccupant?: boolean;

    intersectionRelated?: boolean;
    laneDepartureRelated?: boolean;
    // roadwayCurve?: boolean;

    teenageDriver?: boolean;
    agingDriver?: boolean;


    otherCircumstances?: {
        hitAndRun?: boolean,
        schoolBusRelated?: boolean, // to be moved
        withinCityLimits?: boolean,
        withinInterchange?: boolean,
        workZoneRelated?: boolean, // to be moved
        workersInWorkZone?: boolean,
        lawEnforcementInWorkZone?: boolean;
    };
    formType?: string[];
    codeableOnly?: boolean;

    // * USED
    nonAutoModesOfTravel?: {
        pedestrian?: boolean,
        bicyclist?: boolean,
        moped?: boolean,
        motorcycle?: boolean;
    };

    commonViolations?: {
        speed?: boolean,
        redLight?: boolean,
        rightOfWay?: boolean,
        trafficControlDevice?: boolean,
        carelessDriving?: boolean,
        dui?: boolean;
    };

    // * END -- REMAINDER UNUSED
    crashSeverity?: number[];
    crashTypeDetailed?: number[];
    driverAgeRange?: number[];
    intersection?: {
        intersectionId: number,
        offsetInFeet: number,
        offsetDirection?: string[],
        intersectionNm: string;
    };
    street?: {
        featId: number,
        stNm: string,
        includeCrossStreets: boolean,
        linkIds: number[]
    };
    customNetwork?: number[];
    publicRoadOnly?: boolean;
    driverGender?: number[];
    pedestrianAgeRange?: string[];
    cyclistAgeRange?: string[];
    sourcesOfTransport?: {
        ems?: boolean,
        lawEnforcement?: boolean,
        other?: boolean;
    };
    vehicleType?: number[];
    bikePedCrashType?: {
        bikePedCrashTypeIds: number[],
        includeUntyped?: boolean;
    };
    cmvConfiguration?: number[];
    environmentalCircumstance?: number[];
    roadCircumstance?: number[];
    firstHarmfulEvent?: number[];
    lightCondition?: number[];

    pii?: boolean;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    driverLicenseNbr?: string;
    vin?: string;
    plateNbr?: string;

    reset() {
        this.reportingAgency = undefined;
        this.formType = undefined;
        this.codeableOnly = undefined;
        this.hsmvReportNumbers = undefined;
        this.cmvInvolved = undefined;
        this.bikePedInvolved = undefined;
        this.crashSeverity = undefined;
        this.crashTypeSimple = undefined;
        this.crashTypeDetailed = undefined;
        this.roadSystemIdentifier = undefined;
        this.intersectionRelated = undefined;
        this.behavioralFactors = undefined;
        this.laneDepartureRelated = undefined;
        this.weatherCondition = undefined;
        this.dayOrNight = undefined;
        this.dotDistrict = undefined;
        this.mpoTpo = undefined;
        this.customArea = undefined;
        this.customExtent = undefined;
        this.intersection = undefined;
        this.street = undefined;
        this.customNetwork = undefined;
        this.publicRoadOnly = undefined;
        this.driverGender = undefined;
        this.driverAgeRange = undefined;
        this.teenageDriver = undefined;
        this.agingDriver = undefined;
        this.pedestrianAgeRange = undefined;
        this.cyclistAgeRange = undefined;
        this.nonAutoModesOfTravel = undefined;
        this.sourcesOfTransport = undefined;
        this.commonViolations = undefined;
        this.vehicleType = undefined;
        this.bikePedCrashType = undefined;
        this.cmvConfiguration = undefined;
        this.environmentalCircumstance = undefined;
        this.roadCircumstance = undefined;
        this.firstHarmfulEvent = undefined;
        this.lightCondition = undefined;
        this.otherCircumstances = undefined;

        // Personal Information
        this.pii = undefined;
        this.firstName = undefined;
        this.lastName = undefined;
        this.dateOfBirth = undefined;
        this.driverLicenseNbr = undefined;
        this.vin = undefined;
        this.plateNbr = undefined;
    }
}

//   export class CrashQuery {
//     // mvp
//     reportingAgency?: number[];
//     formType?: string[];
//     codeableOnly?: boolean;
//     hsmvReportNumbers?: number[];
//     agencyReportNumbers?: string[];
//     citationReportNumbers?: string[];
//     cmvInvolved?: boolean;
//     bikePedInvolved?: {
//       pedInvolved?: boolean,
//       bikeInvolved?: boolean
//     };
//     crashSeverity?: number[];
//     crashTypeSimple?: string[];
//     crashTypeDetailed?: number[];
//     roadSystemIdentifier?: number[];
//     intersectionRelated?: boolean;
//     behavioralFactors?: {
//       alcohol?: boolean,
//       drugs?: boolean,
//       distraction?: boolean,
//       aggressiveDriving?: boolean;
//     };
//     laneDepartureRelated?: boolean;
//     weatherCondition?: number[];
//     dayOrNight?: string[];
//     // post-mvp
//     dotDistrict?: string[];
//     mpoTpo?: string[];
//     customArea?: {
//       x: number,
//       y: number
//     }[];
//     customExtent?: {
//       minX: number,
//       minY: number,
//       maxX: number,
//       maxY: number
//     };
//     intersection?: {
//       intersectionId: number,
//       offsetInFeet: number,
//       offsetDirection?: string[],
//       intersectionNm: string;
//     };
//     street?: {
//       featId: number,
//       stNm: string,
//       includeCrossStreets: boolean,
//       linkIds: number[]
//     };
//     customNetwork?: number[];
//     publicRoadOnly?: boolean;
//     driverGender?: number[];
//     driverAgeRange?: string[];
//     pedestrianAgeRange?: string[];
//     cyclistAgeRange?: string[];
//     nonAutoModesOfTravel?: {
//       pedestrian?: boolean,
//       bicyclist?: boolean,
//       moped?: boolean,
//       motorcycle?: boolean;
//     };
//     sourcesOfTransport?: {
//       ems?: boolean,
//       lawEnforcement?: boolean,
//       other?: boolean;
//     };
//     commonViolations?: {
//       speed?: boolean,
//       redLight?: boolean,
//       rightOfWay?: boolean,
//       trafficControlDevice?: boolean,
//       carelessDriving?: boolean,
//       dui?: boolean;
//     };
//     vehicleType?: number[];
//     bikePedCrashType?: {
//       bikePedCrashTypeIds: number[],
//       includeUntyped?: boolean;
//     };
//     cmvConfiguration?: number[];
//     environmentalCircumstance?: number[];
//     roadCircumstance?: number[];
//     firstHarmfulEvent?: number[];
//     lightCondition?: number[];
//     otherCircumstances?: {
//       hitAndRun?: boolean,
//       schoolBusRelated?: boolean,
//       withinCityLimits?: boolean,
//       withinInterchange?: boolean,
//       workZoneRelated?: boolean,
//       workersInWorkZone?: boolean,
//       lawEnforcementInWorkZone?: boolean;
//     };
//     pii?: boolean;
//     firstName?: string;
//     lastName?: string;
//     dateOfBirth?: Date;
//     driverLicenseNbr?: string;
//     vin?: string;
//     plateNbr?: string;

//   }
