import * as highcharts from 'highcharts';
import { titleCase } from 'src/app/shared/utilities';
import { S4_PRIMARY, S4_SECONDARY } from 'src/app/shared/constants';
export class TooltipFormatter {
    x: string;
    y: number;
    series: Highcharts.Series;
    point: any;
    points: any;
    format(): string | false {
        let formatted = '';
        if (this.x) {
            let heading = titleCase(this.x);
            formatted = `<b class="font-heading txt6 mb-2">${heading}</b><br/>`;
            this.points.forEach((point: Highcharts.Point) => {
                // format negative values to display as positive values
                // required for negative stacking charts
                let y: number | undefined = point.y;
                if (y) {
                    if (y < 0) {
                        y = y * -1;
                    }
                    let color; // some series names are hoity toity about their colors
                    switch (point.series.name.toLowerCase().trim()) {
                        case 'fatalities': color = S4_PRIMARY; break; // dark grey
                        case 'serious injuries': color = S4_SECONDARY; break; // main accent
                        default: color = point.color; // whatever value it was planning to use -- could be dangerous
                    }
                    let name = titleCase(point.series.name);
                    let value = highcharts.numberFormat(y, -1, undefined, ',');
                    // I will show up on every hover if you let me'
                    // console.log(name, value);
                    formatted += `<span class="mr-1 txt7" style="color:${color}">●</span> <span class="font-main txt7">${name}: <b class="ml-2">${value}</b></span><br/><br/>`;
                }
            });
        }

        return formatted;
    }
}
