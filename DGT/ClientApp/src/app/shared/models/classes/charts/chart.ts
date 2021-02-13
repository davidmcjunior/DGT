import { S4HighChart } from '../../interfaces';

// wrapper class that holds chart options and
// whatever other props/methods we need to
// manipulate the chart options
export class S4Chart {
  id: string; // passed into the highcharts html element
  options: S4HighChart; // interface taht holds other highcharts interfaces
  constructor(id: string, hc?: S4HighChart) {
    this.id = id;
    if (hc) {
      this.options = hc;
    }

  }
}
