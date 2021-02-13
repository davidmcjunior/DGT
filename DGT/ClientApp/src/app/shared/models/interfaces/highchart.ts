
import { Highcharts, Highstock } from 'src/assets/highcharts';

// interface holding the highcharts option interfaces
export interface S4HighChart {
  title?: Highcharts.TitleOptions | Highstock.TitleOptions;
  subtitle?: Highcharts.SubtitleOptions | Highstock.SubtitleOptions;
  chart?: Highcharts.ChartOptions | Highstock.ChartOptions;
  credits?: Highcharts.CreditsOptions | Highstock.CreditsOptions;
  colors?: Highcharts.ColorString[] | Highstock.ColorString[];
  drilldown?: Highcharts.DrilldownOptions | Highstock.DrilldownOptions;
  xAxis?: Highcharts.AxisOptions | Highstock.AxisOptions;
  yAxis?: Highcharts.AxisOptions | Highstock.AxisOptions;
  legend?: Highcharts.LegendOptions | Highstock.LegendOptions;
  tooltip?: Highcharts.TooltipOptions | Highstock.TooltipOptions;
  pane?: Highcharts.PaneOptions | Highstock.PaneOptions;
  plotOptions?: Highcharts.PlotOptions | Highstock.PlotOptions;
  responsive?: Highcharts.ResponsiveOptions | Highstock.ResponsiveOptions;
  series?: Highcharts.SeriesOptionsType[] | Highstock.SeriesOptionsType;
  accesibility?: Highcharts.AccessibilityOptions | Highstock.AccessibilityOptions;
  lang?: Highcharts.LangOptions | Highstock.LangOptions;
  rangeSelector?: Highstock.RangeSelectorOptions;
}
