import { GeoCount } from '../models';

export function jenkinsBreak(data: GeoCount[][], n: number, f: number, iterations: number): number[] {

  let devSquared = [];

  // let devSquaredMean = 0;

  for (let i = 0; i < data.length; i++) {

    let sum = 0;
    let devSquaredSum = 0;

    for (let j = 0; j < data[i].length; j++) {
      sum += data[i][j].fatalityCount;
    }

    let mean = Math.floor(sum / data[i].length);

    for (let j = 0; j < data[i].length; j++) {
      let dev = data[i][j].fatalityCount - mean;
      let devSqr = Math.pow(dev, 2);
      devSquaredSum += devSqr;
    }

    devSquaredSum /= data[i].length;
    devSquaredSum = Math.sqrt(devSquaredSum);

    // devSquaredMean += devSquaredSum;
    devSquared.push(devSquaredSum);
  }

  // devSquaredMean /= (devSquared.length - 1);
  // devSquaredMean = Math.sqrt(devSquaredMean);

  let newBuckets: GeoCount[][] = [];
  for (let i = 0; i < n; i++) {
    newBuckets.push([]);
  }


  for (let i = 0; i < devSquared.length; i++) {
    if (i === devSquared.length - 1 || data[i].length <= 3) {
      for (let j = 0; j < data[i].length; j++) {
        newBuckets[i].push(data[i][j]);
      }
      continue;
    }
    else {
      if (devSquared[i] > devSquared[i + 1]) {
        let x = Math.ceil(data[i].length * f);
        for (let j = 0; j < data[i].length; j++) {
          if (j >= data[i].length - x) {
            newBuckets[i + 1].push(data[i][j]);
          }
          else {
            newBuckets[i].push(data[i][j]);
          }
        }
      }
      else if (i < devSquared.length - 1) {
        let x = Math.ceil(data[i + 1].length * f);
        for (let j = 0; j < data[i].length; j++) {
          newBuckets[i].push(data[i][j]);
        }
        if (data[i + 1].length > 3) {
          for (let j = 0; j < x; j++) {
            newBuckets[i].push(data[i + 1].shift() as GeoCount);
          }
        }
      }
    }
  }
  if (iterations > 1000) {
    let breaks: number[] = [];
    for (let i = 0; i < newBuckets.length; i++) {
      breaks.push((newBuckets[i].pop() as GeoCount).fatalityCount);
    }
    return breaks;
  }

  iterations += 1;
  return jenkinsBreak(newBuckets, n, f, iterations);
}
