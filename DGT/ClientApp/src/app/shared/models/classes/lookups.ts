import * as _ from 'lodash';
import { PublicGeographicFilterArea } from '../../constants';
import { LookupKeyAndValue } from '../interfaces';
import { sort } from '../../utilities';

export class LookupKeyAndName {
    key: number | string | boolean;
    name: string;
    constructor(k: number | string | boolean, n: string) {
        this.key = k;
        this.name = n;
    }
}

export class LookupName {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}


/*
initializes with a lookups object from the server the lookups were
being used differently in client / server many LookupName[]s were
coming from the server and being mapped into
anonymous objects that mimic LookupKeyAndName.
In process of figuring out how to document the mapping process
of LookupName objects into LookupKeyAndName objects
The LookupKeyAndName is now expanded on the client to allow multiple types for the 'key' value

bikeInvolved / pedInvolved were 'yes' / 'no'
other 'yes' / 'no' instances get boolean keys
other LookupName[]s get string keys that have matching type declarations
*/
export class Lookups {

    counties: LookupKeyAndName[];
    agencies: LookupKeyAndName[];
    cities: LookupKeyAndName[];
    mpoTpos: LookupKeyAndName[];
    dotDistricts: LookupKeyAndName[];
    geographies: LookupKeyAndName[];
    reportingAgencies: LookupKeyAndName[];

    roadSystemIdentifiers: LookupKeyAndName[];
    crashSeverieties: LookupKeyAndName[];
    crashTypes: LookupName[];
    weatherConditions: LookupKeyAndName[];
    behaviorFactors: LookupKeyAndName[];
    bikeInvolved: LookupKeyAndName[];
    pedInvolved: LookupKeyAndName[];
    cmvInvolved: LookupKeyAndName[];
    dayOrNight: LookupKeyAndName[];
    intersectionRelated: LookupKeyAndName[];
    laneDepartures: LookupKeyAndName[];
    formTypes: LookupKeyAndName[];
    codeableOnly: LookupKeyAndName[];
    bikeOrPedInvolved: LookupKeyAndName[];
    driverAgeRange: LookupName[];

    dotDriverAgeRange: LookupKeyAndName[];
    injurySeverity: LookupKeyAndName[];
    publicGeographyArea: LookupKeyAndName[];

    months: LookupKeyAndName[];
    dayOfWeek: LookupKeyAndName[];
    hourOfDay: LookupKeyAndName[];

    limitedCrashSeverity: LookupKeyAndName[];
    drivingBehavior: LookupKeyAndName[];
    emphasisSites: LookupKeyAndName[];
    usersInvolved: LookupKeyAndName[];
    driversInvolved: LookupKeyAndName[];
    vehiclesInvolved: LookupKeyAndName[];
    environment: LookupKeyAndName[];
    crashType: LookupKeyAndName[];
    roadSystem: LookupKeyAndName[];
    otherCircumstances: LookupKeyAndName[];

    /* matches with data table s4_flat.db_emphasis_area columns
    aggregate will:
        combine speeding & aggressive / bike & ped / drug & alc
        removes hit & run - per dot request
    dissagregate matches the column

    */
    aggregateEmphasisArea: LookupKeyAndName[];
    disaggregateEmphasisArea: LookupKeyAndName[];

    constructor(data?: Lookups) {
        if (data) {
            Object.assign(this, data);
            let reportingAgencies = this.replaceFHPName(data.reportingAgencies);
            reportingAgencies = this.mergeTwinAgencies(reportingAgencies);
            this.reportingAgencies = reportingAgencies;
        }


        this.behaviorFactors = [
            { key: 'aggressive', name: 'Aggressive Driving' },
            { key: 'distracted', name: 'Distracted Driving' },
            { key: 'alcohol', name: 'Alcohol Involved' },
            { key: 'drug', name: 'Drugs Involved' }] as LookupKeyAndName[];


        this.dayOrNight = [{ key: 'DAY', name: 'Day' }, { key: 'NIGHT', name: 'Night' }] as LookupKeyAndName[];
        this.intersectionRelated = [{ key: true, name: 'Yes' }, { key: false, name: 'No' }] as LookupKeyAndName[];



        this.laneDepartures = [{ key: true, name: 'Yes' }, { key: false, name: 'No' }] as LookupKeyAndName[];
        this.cmvInvolved = [{ key: true, name: 'Yes' }, { key: false, name: 'No' }] as LookupKeyAndName[];

        this.bikeInvolved = [{ key: 'Bike', name: 'Bike Involved' }] as LookupKeyAndName[]; // [{ key: true, name: 'Yes' }, { key: false, name: 'No' }];
        this.pedInvolved = [{ key: 'Ped', name: 'Pedestrian Involved' }] as LookupKeyAndName[]; // [{ key: true, name: 'Yes' }, { key: false, name: 'No' }];
        this.bikeOrPedInvolved = [...this.bikeInvolved, ...this.pedInvolved] as LookupKeyAndName[]; // [{ key: 'Bike', name: 'Bike Involved' }, { key: 'Ped', name: 'Pedestrian Involved' }]


        this.formTypes = [{ key: 'L', name: 'Long' }, { key: 'S', name: 'Short' }] as LookupKeyAndName[];
        this.codeableOnly = [{ key: true, name: 'Codeable' }] as LookupKeyAndName[]; // [{ key: true, name: 'Yes' }, { key: false, name: 'No' }];


        this.injurySeverity = [
            { key: 'all', name: 'Fatalities & Serious Injuries' },
            { key: 'fatalities', name: 'Fatalities' },
            { key: 'seriousInjuries', name: 'Serious Injuries' }
        ] as LookupKeyAndName[];

        this.publicGeographyArea = [
            { key: 'all', name: 'State of Florida' },
            { key: 'dotDistrict', name: 'FDOT District' },
            { key: 'county', name: 'County' },
            // { key: 'city', name: 'City' }, // removed until we determine how to map
            { key: 'mpoName', name: 'MPO' },
        ] as LookupKeyAndName[];

        this.months = [
            { key: 1, name: 'January' },
            { key: 2, name: 'February' },
            { key: 3, name: 'March' },
            { key: 4, name: 'April' },
            { key: 5, name: 'May' },
            { key: 6, name: 'June' },
            { key: 7, name: 'July' },
            { key: 8, name: 'August' },
            { key: 9, name: 'September' },
            { key: 10, name: 'October' },
            { key: 11, name: 'November' },
            { key: 12, name: 'December' }
        ] as LookupKeyAndName[];

        this.dayOfWeek = [
            { key: 1, name: 'Sunday' },
            { key: 2, name: 'Monday' },
            { key: 3, name: 'Tuesday' },
            { key: 4, name: 'Wednesday' },
            { key: 5, name: 'Thursday' },
            { key: 6, name: 'Friday' },
            { key: 7, name: 'Saturday' },
        ] as LookupKeyAndName[];

        this.hourOfDay = [
            { key: 0, name: '12 AM' },
            { key: 1, name: '1 AM' },
            { key: 2, name: '2 AM' },
            { key: 3, name: '3 AM' },
            { key: 4, name: '4 AM' },
            { key: 5, name: '5 AM' },
            { key: 6, name: '6 AM' },
            { key: 7, name: '7 AM' },
            { key: 8, name: '8 AM' },
            { key: 9, name: '9 AM' },
            { key: 10, name: '10 AM' },
            { key: 11, name: '11 AM' },
            { key: 12, name: '12 PM' },
            { key: 13, name: '1 PM' },
            { key: 14, name: '2 PM' },
            { key: 15, name: '3 PM' },
            { key: 16, name: '4 PM' },
            { key: 17, name: '5 PM' },
            { key: 18, name: '6 PM' },
            { key: 19, name: '7 PM' },
            { key: 20, name: '8 PM' },
            { key: 21, name: '9 PM' },
            { key: 22, name: '10 PM' },
            { key: 23, name: '11 PM' },
        ] as LookupKeyAndName[];

        this.dotDriverAgeRange = [
            { key: 1, name: 'Under 15' },
            { key: 2, name: '15 - 19' },
            { key: 3, name: '20 - 24' },
            { key: 4, name: '25 - 34' },
            { key: 5, name: '35 - 44' },
            { key: 6, name: '45 - 54' },
            { key: 7, name: '55 - 64' },
            { key: 8, name: '65+' }
        ] as LookupKeyAndName[];

        this.limitedCrashSeverity = [
            { key: 'fatality', name: 'Fatality' },
            { key: 'seriousInjury', name: 'Incapacitating Injury' },
            { key: 'injury', name: 'Injury' },
            { key: 'propertyDamageOnly', name: 'Property Damage Only' }
        ] as LookupKeyAndName[];

        this.usersInvolved = [
            { key: 'pedestrians', name: 'Pedestrians' },
            { key: 'bicyclists', name: 'Bicyclists' },
            { key: 'motorcyclists', name: 'Motorcyclists' },

        ];

        this.drivingBehavior = [
            { key: 'aggressiveDriving', name: 'Aggressive Driving' },
            { key: 'distracted', name: 'Distracted Driving' },
            { key: 'alcohol', name: 'Alcohol Involved' },
            { key: 'drugs', name: 'Drugs Involved' },
            { key: 'speeding', name: 'Speeding' },
            { key: 'unrestrainedOccupant', name: 'Unrestrained Occupant' },
        ];

        this.emphasisSites = [
            { key: 'laneDeparture', name: 'Lane Departure Related' },
            { key: 'intersectionRelated', name: 'Intersection Related' },
            { key: 'workZone', name: 'Work Zone Related' },
        ];

        this.driversInvolved = [
            { key: 'teenageDriver', name: 'Teenage Driver' },
            { key: 'agingDriver', name: 'Aging Driver(65+)' },

        ];
        this.vehiclesInvolved = [
            { key: 'cmv', name: 'Commercial Motor Vehicle' },
            { key: 'schoolBus', name: 'School Bus' },
        ];
        this.environment = [
            { key: 'night', name: 'Night' },
            { key: 'rain', name: 'Rain' }
        ];
        this.crashType = [
            { key: 'angle', name: 'Angle' },
            { key: 'animal', name: 'Animal' },
            { key: 'headOn', name: 'Head On' },
            { key: 'leftTurn', name: 'Left Turn' },
            { key: 'offRoad', name: 'Off Road' },
            { key: 'other', name: 'Other' },
            { key: 'rearEnd', name: 'Rear End' },
            { key: 'rightTurn', name: 'Right Turn' },
            { key: 'rollover', name: 'Rollover' },
            { key: 'sideswipe', name: 'Sideswipe' },
            { key: 'unknown', name: 'Unknown' },
        ];
        this.roadSystem = [
            { key: 'interstate', name: 'Interstate' },
            { key: 'us', name: 'U.S.' },
            { key: 'state', name: 'State' },
            { key: 'county', name: 'County' },
            { key: 'local', name: 'Local' },
            { key: 'turnpikeToll', name: 'Turnpike/Toll' },
            { key: 'forrestRoad', name: 'Forest Road' },
            { key: 'privateRoadway', name: 'Private Roadway' },
            { key: 'parkingLot', name: 'Parking Lot' },
            { key: 'other', name: 'Other' },
        ];
        this.otherCircumstances = [
            { key: 'hitAndRun', name: 'Hit and Run' },
            { key: 'longForm', name: 'Long Form Only' },
            { key: 'shortForm', name: 'Short Form Only' },
            { key: 'codeable', name: 'Codeable' },
        ];
    }



    get publicMpos(): LookupKeyAndName[] {
        const mpos = this.mpoTpos;
        return mpos.map((mpo: LookupName) => {
            return { key: 'mpoName', name: mpo.name } as LookupKeyAndName;
        });
    }


    getPublicGeography(keys?: PublicGeographicFilterArea[]): LookupKeyAndName[] {
        const prepForSort = (key: PublicGeographicFilterArea, output: LookupKeyAndName[]): LookupKeyAndName[] => {
            let arr: LookupKeyAndValue[] = [];
            let cities: LookupKeyAndValue[] = [{ key: 'city', value: this.cities }];
            let counties: LookupKeyAndValue[] = [{
                key: 'county', value: this.counties.map(county => {
                    return { key: county.key, name: `${county.name} County` };
                })
            }];
            let dotDistricts: LookupKeyAndValue[] = [{ key: 'dotDistrict', value: this.dotDistricts }];
            let mpoNames: LookupKeyAndValue[] = [{ key: 'mpoName', value: this.publicMpos }];
            switch (key) {
                case 'city': arr = cities; break;
                case 'county': arr = counties; break;
                case 'dotDistrict': arr = dotDistricts; break;
                case 'mpoName': arr = mpoNames; break;
                default: arr = []; break;
            }
            arr.forEach((lkv: LookupKeyAndValue) => {
                let lk = lkv.value as LookupKeyAndName[];
                lk.forEach((lkn: LookupKeyAndName) => {
                    output.push({ key: lkv.key, name: lkn.name });
                });
            });
            return output;
        };
        let geographies: LookupKeyAndName[] = [];
        if (keys && keys.length === 1) {
            let key = keys[0];
            // return one
            return prepForSort(key, []);
        }
        if (keys && keys.length > 1) {
            keys.forEach(key => {
                geographies = prepForSort(key, geographies)
            })
            geographies = sort<LookupKeyAndName>(geographies, 'name', 'asc');
            // console.log(geographies);
        };
        if (!keys || keys === undefined || keys.length === 0) {

            geographies = [];
            geographies = prepForSort('dotDistrict', geographies);
            geographies = prepForSort('county', geographies);
            geographies = prepForSort('city', geographies);
            geographies = prepForSort('mpoName', geographies);
            geographies = sort<LookupKeyAndName>(geographies, 'name', 'asc');
            // console.log('sorted value shows', geographies);
        }
        geographies.unshift({ key: 'state', name: 'State of Florida' });
        return geographies;
    }

    // seminole indian res police department has two entries
    // remove 1, and manually insert the other if chosen
    // keys are 6041200 && 1075200
    private mergeTwinAgencies(reportingAgencies: LookupKeyAndName[]): LookupKeyAndName[] {
        let found = reportingAgencies.find((agcy) => agcy.key === 6041200), i = -1;
        if (found) {
            i = reportingAgencies.indexOf(found);
            if (i >= 0) {
                reportingAgencies.splice(i, 1);
            }
        }

        return reportingAgencies;
    }

    // Replace 'Florida Highway Patrol' with 'FHP' in list returned from DIM_AGNCY
    private replaceFHPName(agencies: LookupKeyAndName[]): LookupKeyAndName[] {
        let index = _.findIndex(agencies, (kvp: LookupKeyAndName) => kvp.key === 1);
        if (agencies[index]) {
            agencies[index].name = 'FHP';
        }
        return _.orderBy(agencies, ['name'], ['asc']);
    }

}
