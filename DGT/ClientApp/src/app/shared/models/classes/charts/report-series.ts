export class SeriesData {
  id: string;
  name: string;
  data: any[];
  colorByPoint?: boolean;
  drilldown?: boolean;
  dashStyle?: string;
  linkedTo?: string;
  color?: string;
  className?: string;
}

export class ReportSeries {
  categories: string[];
  series: SeriesData[];
  maxDate: Date;

  constructor(report?: ReportSeries) {
    if (report) {
      Object.assign(this, report); // merge data from the api
    }
    this.maxDate = new Date(this.maxDate); // rest api represents dates as strings at runtime; convert

  }
}
