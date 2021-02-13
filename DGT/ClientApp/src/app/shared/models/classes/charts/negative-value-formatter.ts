
export class NegativeValueFormatter {
  color: Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject | undefined;
  colorIndex: number;
  key: string | undefined;
  percentage: number;
  point: Highcharts.Point;
  series: Highcharts.Series;
  total: number | undefined;
  value: any;
  x: number | string | undefined;
  y: number | undefined;

  getPositiveLabelValue(): string {
    let formatted = this.value;
    if (formatted && formatted < 0) {
      formatted = formatted * -1;
    }
    return `${formatted}`;
  }
  getPositiveYValue(): string {
    let formatted = this.y;
    if (formatted && formatted < 0) {
      formatted = formatted * -1;
    }
    return `${formatted}`;
  }
}
