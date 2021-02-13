import { AccessCheckResult } from '../models/enums/access-check-result.enum';
import { CrashResult } from '../models/classes/crash-result';

export function createMapboxPopup(coordinates: any, long: number, crashResult: CrashResult) {
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(long - coordinates[0]) > 180) {
        coordinates[0] += long > coordinates[0] ? 360 : -360;
    }
    let accessCheck = crashResult.userCanViewReportImage === AccessCheckResult.Allowed;
    let id = `popup${crashResult.hsmvReportNumberDisp}`;
    let description = `
                      <div class="d-flex flex-row align-items-center">
                        HSMV Report Number:
                        <div
                          id="${id}"
                          class="ml-1 ${accessCheck ? 'btn-link hsmv-rpt-link cursor-pointer' : 'clr-dark pointer-events-none'}">
                          ${crashResult.hsmvReportNumberDisp}
                        </div>
                      </div>

                      <br>
                      <div>
                        Crash Severity: ${crashResult.crashSeverity}
                      </div>
                      <div>
                        Crash Type: ${crashResult.crashType}
                      </div>`;

    return { id, accessCheck, coordinates, description };
}

export function createThematicMapboxPopup(coordinates: any, long: number, county: string, count: number, fatCount: number, injCount: number) {
    //   console.log('to prevent lint no-unused-vars errors', long, county, count, fatCount, injCount);
    const description = '<thematic-map-popup></thematic-map-popup>';

    return { description, coordinates };
}

