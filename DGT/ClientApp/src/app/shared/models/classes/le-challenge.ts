import { CrashSummary } from './crash-summary';

export class ChallengeTotals {
  totalCrashes: number;
  injuryCrashes: number;
  fatalCrashes: number;
  distractedCrashes: number;
  impairedCrashes: number;
  motorcycleCrashes: number;
  bikeCrashes: number;
  pedCrashes: number;
  speedCrashes: number;
  constructor(cs: CrashSummary) {
    this.totalCrashes = cs.totalCrashes;
    this.injuryCrashes = cs.injuryCrashes;
    this.fatalCrashes = cs.fatalCrashes;
    this.distractedCrashes = cs.distractedCrashes;
    this.impairedCrashes = cs.impairedCrashes;
    this.motorcycleCrashes = cs.motorcycleCrashes;
    this.bikeCrashes = cs.bikeCrashes;
    this.pedCrashes = cs.pedCrashes;
    this.speedCrashes = cs.speedCrashes;
  }
}
export class LEChallenge {
  entityName: string;
  total: ChallengeTotals;
  summaries: Array<CrashSummary>;
  children: Array<LEChallenge>;

  constructor(e: string, t: CrashSummary, s: Array<CrashSummary>, c: Array<LEChallenge>) {
    this.entityName = e;
    this.total = new ChallengeTotals(t);
    this.summaries = s;
    this.children = c;
  }
}
