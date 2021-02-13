import { S4Chart, ReportSeries } from '../classes';

// contains all possible values for a reoprt
export interface S4Report {
  loaded: boolean; // is the report loaded in a component
  chart?: S4Chart;
  report?: ReportSeries;
  reportYear?: number;
  alignByWeek?: boolean;
  attribute?: string;
  numPriorYears?: number;
  yearOnYear?: boolean;
}
