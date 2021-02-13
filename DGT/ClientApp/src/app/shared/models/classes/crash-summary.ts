export class CrashSummary {
  countyNm: string;
  cityNm: string;
  agencyNm: string;
  unitNm: string;
  totalCrashes: number;
  injuryCrashes: number;
  fatalCrashes: number;
  distractedCrashes: number;
  impairedCrashes: number;
  motorcycleCrashes: number;
  bikeCrashes: number;
  pedCrashes: number;
  speedCrashes: number;
  constructor() {
    this.countyNm = '';
    this.cityNm = '';
    this.agencyNm = '';
    this.unitNm = '';
    this.totalCrashes = 0;
    this.injuryCrashes = 0;
    this.fatalCrashes = 0;
    this.distractedCrashes = 0;
    this.impairedCrashes = 0;
    this.motorcycleCrashes = 0;
    this.bikeCrashes = 0;
    this.pedCrashes = 0;
    this.speedCrashes = 0;
  }

}

export class EmphasisAreaSummary {
  // included in dash_crash table
  year: number;
  month: number;
  county: string;
  city: string;
  reportingAgencyName: string;
  dotDistrict: string;
  mpoName: string;
  totalCrashes: number;
  fatalCrashes: number;
  fatalities: number;
  seriousInjuryCrashes: number;
  seriousInjuries: number;
  agingDriverCrashes: number;
  cmvCrashes: number;
  distractedCrashes: number;
  alcoholImpairedCrashes: number;
  drugImpairedCrashes: number;
  intersectionCrashes: number;
  laneDepartureCrashes: number;
  motorcycleCrashes: number;
  bikeCrashes: number;
  pedCrashes: number;
  hitAndRunCrashes: number;
  speedCrashes: number;
  aggressiveCrashes: number;
  teenageDriverCrashes: number;
  unrestrainedCrashes: number;
  workZoneCrashes: number;
  codeableCrashes: number;
  longForm: number;
  timely: number;
  constructor(yr: number) {
    this.year = yr;
    this.month = 0;
    this.county = '';
    this.city = '';
    this.dotDistrict = '';
    this.mpoName = '';
    this.reportingAgencyName = '';
    this.totalCrashes = 0;
    this.fatalCrashes = 0;
    this.fatalities = 0;
    this.seriousInjuryCrashes = 0;
    this.seriousInjuries = 0;
    this.agingDriverCrashes = 0;
    this.hitAndRunCrashes = 0;
    this.cmvCrashes = 0;
    this.distractedCrashes = 0;
    this.alcoholImpairedCrashes = 0;
    this.drugImpairedCrashes = 0;
    this.intersectionCrashes = 0;
    this.laneDepartureCrashes = 0;
    this.motorcycleCrashes = 0;
    this.bikeCrashes = 0;
    this.pedCrashes = 0;
    this.speedCrashes = 0;
    this.aggressiveCrashes = 0;
    this.teenageDriverCrashes = 0;
    this.unrestrainedCrashes = 0;
    this.workZoneCrashes = 0;
    this.codeableCrashes = 0;
    this.longForm = 0;
    this.timely = 0;
  }
  get bikeAndPedCrashes(): number { return this.bikeCrashes + this.pedCrashes; }
  get impairedCrashes(): number { return this.alcoholImpairedCrashes + this.drugImpairedCrashes; }
  get wrecklessDriverCrashes(): number { return this.speedCrashes + this.aggressiveCrashes; }
}
