import { S4Report } from '../models';

export const defaultReports: { [key: string]: S4Report } = {
  'emphasisArea': {
    report: undefined,
    chart: undefined,
    reportYear: undefined,
    numPriorYears: 0,
    loaded: false
  },
  'byYear': {
    report: undefined,
    chart: undefined,
    reportYear: undefined,
    numPriorYears: 4,
    loaded: false
  },
  'byMonth': {
    report: undefined,
    chart: undefined,
    reportYear: undefined,
    numPriorYears: 0,
    loaded: false
  },
  'byDay': {
    report: undefined,
    chart: undefined,
    reportYear: undefined,
    alignByWeek: true,
    yearOnYear: false,
    numPriorYears: 0,
    loaded: false
  },
  'dayOfWeek': {
    report: undefined,
    chart: undefined,
    reportYear: undefined,
    numPriorYears: 0,
    loaded: false,
    attribute: 'day-of-week'
  },
  'hourOfDay': {
    report: undefined,
    chart: undefined,
    reportYear: undefined,
    numPriorYears: 0,
    loaded: false,
    attribute: 'hour-of-day'
  },
  'dataTimeliness': {
    report: undefined,
    chart: undefined,
    reportYear: undefined,
    numPriorYears: 0,
    loaded: false
  },
  'ageRange': {
    report: undefined,
    chart: undefined,
    reportYear: undefined,
    numPriorYears: 0,
    loaded: false,
    attribute: 'age-range'

  }
};
export const reportOverTimeKeys = ['byYear', 'byMonth', 'byDay'];

export const dashboardReportKeys = ['emphasisArea', 'byYear', 'byMonth', 'dayOfWeek', 'hourOfDay', 'ageRange'];


export const getReport = (key: string): S4Report => {
  return defaultReports[key];
};
