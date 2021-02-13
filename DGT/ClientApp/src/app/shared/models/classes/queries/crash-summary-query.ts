import { DateTimeScope } from './crash-query';
import { CrashSummary } from '../crash-summary';
import { LookupKeyAndName } from '../lookups';

export class CrashSummaryQuery {
    dateTimeScope: DateTimeScope;
    counties: number[];
    agencies: number[];
    units: number[];
    cities: number[];
    dotDistricts: number[];
    mpos: string[];
    orderBy: string;

    constructor() {
        this.dateTimeScope = new DateTimeScope();
        this.counties = [];
        this.agencies = [];
        this.units = [];
        this.cities = [];
        this.dotDistricts = [];
        this.orderBy = 'county';
        this.mpos = [];
    }
}

export class EmphasisAreaTotal {
    emphasisAreaID: number;
    emphasisArea: string;
    totalCrashes: number;
    totalInjuries: number;
    totalFatalities: number;
    isSubCategory?: boolean;
}

export class CrashSummaryQueryResponse {
    count: number;
    executionTimeMS: number;
    crashSummaries: CrashSummary[];
    emphasisSummaries: EmphasisAreaTotal[];
    queryGuid: any;
}
