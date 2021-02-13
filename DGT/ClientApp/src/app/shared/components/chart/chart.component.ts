import { Component, Input, AfterViewInit, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { S4HighChart } from 'src/app/shared/models/interfaces';
import { Highstock, Highcharts } from 'src/assets/highcharts';

@Component({
    selector: 's4-chart',
    templateUrl: './chart.component.html'
})

export class ChartComponent implements AfterViewInit, OnChanges {
    @Input() chartId: string;
    @Input() format: 'highchart' | 'highstock' = 'highchart';
    @Input() options: S4HighChart;
    @ViewChild('chart') chart: ElementRef;
    configuration: Highstock.Chart;

    constructor() { }

    ngAfterViewInit() {
        this.configureChart();
    }

    ngOnChanges(change: SimpleChanges) {
        if (change.options && !change.options.firstChange) {

            // TODO: Assess changes before rebuilding -- possibly update instead???
            // console.log(this.chartId, 'changed', change.options.previousValue, change.options.currentValue);

            this.configuration.destroy();
            this.configureChart();
        }
    }

    get chartClass(): string {
        if (this.options.chart) {
            return `hc ${this.options.chart.type}`;
        }
        else { return 'hc'; }
    }

    configureChart(): void {
        // console.log('In Chart Options', this.options);
        this.configuration = this.format === 'highchart' ?
            Highcharts.chart(this.chartId, this.options as Highcharts.Options) :
            Highstock.stockChart(this.chartId, this.options as Highstock.Options);
        this.chart.nativeElement = this.configuration;
    }
}
