import * as highcharts from 'highcharts';
// import { GoogleTagService } from '../../../../core/services/google-tag.service';
// import { GoogleTagCategory } from '../../enums';

export class SeriesEventFormatter {
    /*
    Highcharts.SeriesLegendItemClickCallbackFunction(this, event)
    this = Highcharts.Series
    event = event that occured
    Fires when the legend item belonging to the series is clicked. One parameter, event, is passed to the function. The default action is to toggle the visibility of the series.
    This can be prevented by returning false or calling event.preventDefault().
    */
    visible: boolean;

    legendItemClick() {
        // uncomment line below for context in console
        // console.log(this, event);
        let series: any = this;
        series = <highcharts.Series>series;
        let name = series.name;
        let title = series.chart.title.textStr;
        let visibility = (visible: boolean) => visible ? 'visibile' : 'hidden';

        // TODO:  Need to inject GoogleTagService in here somehow
        // let eventLabel = name + ': ' + visibility(!this.visible);
        // googleTag.event(title, { 'value': 1, 'event_category': GoogleTagCategory[GoogleTagCategory.Chart], 'event_label': eventLabel });

        // console.log('The series named ', name, ' from the ', title, 'chart changed from ', visibility(this.visible), ' to ', visibility(!this.visible));

    }
}
