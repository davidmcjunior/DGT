import { LookupKeyAndName } from '../models';

/**
 * DOT has a set of Emphasis Areas that differ from Signal Fours attributes
 * Emphasis areas contain all the attribute counts aggregates that are included in the public dashboard
 * specifically the priority area summary
 * additionally dot would like to be able to filter by their attributes, which combine two emphasis areas in 3 different situations
 * This method maps the emphasis areas into dots priority areas

Emphasis Areas
1	Aging Driver
2	Teen Driver
3	Aggressive Driving
4	Distracted Driving
5	Hit and Run
6	Impairment - Alcohol
7	Impairment - Drugs
8	Speeding
9	Unrestrained Occupant
10	Intersection
11	Lane Departure
12	Work Zone
13	Bicycle Involved
14	CMV Involved
15	Motorcycle Involved
16	Pedestrian Involved

Emphasis Areas Include Emphasis Areas - Add [Remove] - Name
[5]
17 [3,8] Speeding and Aggressive Driving
18 [13, 16] Bicyclist or Pedestrian
19 [6, 7] Impaired Driving
*/

export const trimEmphasisAreas = (emphasisAreas: LookupKeyAndName[]): LookupKeyAndName[] => {
    let output: LookupKeyAndName[] = [
        // { key: 0, name: 'All Emphasis Areas' }
    ];
    emphasisAreas.forEach((emphasisArea: LookupKeyAndName, i: number) => {
        // removes keys with duplicates
        let previous = emphasisAreas[i - 1];
        if (previous) {
            if (emphasisArea.name.toLowerCase() !== previous.name.toLowerCase()) {
                output.push(emphasisArea);
            } else {

            }
        } else {
            output.push(emphasisArea);
        }
    });
    output.forEach(area => {
        if (area.name.trim() === 'Speeding and Aggressive') {
            area.name += ' Driving';
        }
    });
    return output;
};

export function setAsEmphasisArea(emphasisArea: any): number[] {
    if (emphasisArea === undefined || emphasisArea.length === 0) {
        return emphasisArea;
    }
    emphasisArea = <LookupKeyAndName>emphasisArea;
    if (emphasisArea.name.toLowerCase().trim() === 'Speeding and Aggressive Driving'.toLowerCase().trim()) {
        return [3, 8];
    }
    if (emphasisArea.name.toLowerCase().trim() === 'Pedestrians and Bicyclists'.toLowerCase().trim()) {
        return [13, 16];
    }
    if (emphasisArea.name.toLowerCase().trim() === 'Impaired Driving'.toLowerCase().trim()) {
        return [6, 7];
    }
    return [<number>emphasisArea.key];
}

