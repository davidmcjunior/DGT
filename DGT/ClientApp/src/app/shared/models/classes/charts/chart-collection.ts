import { S4Chart } from './chart';
import { S4HighChart } from '../../interfaces';

// list of S4Charts with crud options
export class ChartCollection {
  charts: S4Chart[];
  constructor(charts?: S4Chart[]) {
    if (charts) {
      this.charts = charts;
    }
    else {
      this.charts = [];
    }
  }

  add = (chart: S4Chart) => this.charts.push(chart);
  get = (title: string): S4Chart => {
    let myChart = this.charts.find((chart: S4Chart) => chart.options.title && chart.options.title.text === title);
    if (!myChart) {
      return new S4Chart(title);
    }
    return myChart;
  }


  getAll = (): S4Chart[] => this.charts;
  remove = (title: string) => {
    this.charts.splice(
      this.charts.indexOf(this.get(title)), 1);
  }

  update = (title: string, update: S4HighChart) => {
    this.charts.forEach(chart => {
      if (chart.options.title && chart.options.title.text === title) {
        chart.options = update;
      }
    });
  }
}
