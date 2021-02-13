import { AppCategory, ReportingQueryType } from 'src/app/shared/constants';
import { LookupKeyAndName } from '../lookups';

export interface IReportingQuery {
    geographyArea?: LookupKeyAndName;
    geographyId?: number;
    reportingAgencyId?: number[]; // some agencies have multiple keys
    reportingAgencyName?: string;
    injurySeverity?: string;
    emphasisArea?: number[]; // lookup key
    emphasisAreaName?: string;
    numPriorYears: number;
}

export class CrashesOverTimeQuery implements IReportingQuery {
    geographyArea?: LookupKeyAndName;
    geographyId?: number;
    reportingAgencyId?: number[];
    reportingAgencyName?: string;
    severity?: {
        propertyDamageOnly: boolean,
        injury: boolean,
        fatality: boolean
    };
    impairment?: {
        alcoholRelated: boolean,
        drugRelated: boolean
    };
    bikePedRelated?: {
        bikeRelated: boolean,
        pedRelated: boolean
    };
    cmvRelated?: boolean;
    codeable?: boolean;
    formType?: {
        longForm: boolean,
        shortForm: boolean
    };
    numPriorYears: number;
}

export class CitationsOverTimeQuery implements IReportingQuery {
    geographyArea?: LookupKeyAndName;
    geographyId?: number;
    reportingAgencyId?: number[];
    reportingAgencyName?: string;
    crashInvolved?: boolean;
    classification?: string;
    numPriorYears: number;
}

export class PublicReportingQuery implements IReportingQuery {
    geographyArea?: LookupKeyAndName;
    geographyId?: number;
    reportingAgencyId?: number[];
    reportingAgencyName?: string;
    injurySeverity?: string;
    emphasisArea?: number[];
    numPriorYears: number;
}

export class ReportingQuery {
    year: number;
    category: AppCategory;
    queryType: ReportingQueryType;
    query: IReportingQuery;
    constructor(cat: AppCategory, type?: ReportingQueryType) {
        this.year = new Date().getFullYear();
        this.category = cat;
        this.queryType = type ? type : cat;
        switch (this.queryType) {
            case 'public':
                this.query = new PublicReportingQuery();
                break;
            case 'crash':
                this.query = new CrashesOverTimeQuery();
                break;
            case 'citation':
                this.query = new CitationsOverTimeQuery();
                break;
            default: break;
        }
    }
}
