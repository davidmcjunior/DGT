
export class GeoCount {
  name: string;
  count: number;
  fatalityCount: number;
  injuryCount: number;

  constructor(n: string, c: number, f: number, i: number) {
    this.name = n;
    this.count = c;
    this.fatalityCount = f;
    this.injuryCount = i;
  }
}
