import { Component, OnInit, Input, OnChanges, Output, EventEmitter, ViewChild, HostListener } from '@angular/core';
import { ReportingStateService, ChartBuilderService, AppStateService } from 'src/app/core/services';
import { S4Chart, S4Report, S4HighChart, ReportSeries, TooltipFormatter, SeriesData } from 'src/app/shared/models';
import * as moment from 'moment';
import { titleCase } from 'src/app/shared/utilities';
import { AppCategory, FrameType, HighchartFormat, ReportType, S4_PRIMARY } from 'src/app/shared/constants';
import { PopupComponent } from '../popup/popup.component';
import { Subscription } from 'rxjs';
import { XAxisOptions } from 'highcharts';

@Component({
    selector: 'report',
    templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit, OnChanges {
    @Input() type: ReportType;
    @Input() wrapper: FrameType = 'basic';
    @Input() attribute?: string;
    @Input() hasPopup = false;
    @Output() change = new EventEmitter<any>();
    @ViewChild('reportPopup') popup: PopupComponent;
    format: HighchartFormat = 'highchart';
    initialized = false;
    isLoading = false;
    isAwaitingMaxEventYear: boolean;
    isEmptySet?: boolean;
    mirroredChart?: S4Chart;
    priorYearCount?: number;
    selectedAttribute?: string;
    status$: Subscription;
    title: string;

    private status: S4Report = { loaded: false };

    constructor(private reportingState: ReportingStateService, private chartBuilder: ChartBuilderService) { }

    ngOnInit() {
        this.watchesStatus();
    }

    ngOnChanges() {
        if (this.wrapper === 'display' || this.wrapper === 'mirrored' && this.type) {
            this.reflectChange();
        }
    }
    ngOnDestroy(): void {
        this.status$.unsubscribe();
    }
    @HostListener('window:click', ['$event'])
    handleClickEvent = (event: MouseEvent | any) => {
        if (this.type === 'emphasisArea') {
            // console.log(event);
            if (event.target.id === 'emphasisAreaTitle' && this.hasPopup) {
                // console.log(this.popup);
                this.popup.toggleOpen();
            }
        }
    }

    // frame(thumb/basic | display/mirrored) thumb - trigger request for data - display - shows a copy of the selected report in mirroredChart
    get chart() { return this.wrapper === 'basic' ? this.status.chart : this.mirroredChart; }
    set chart(value) {
        if (this.wrapper === 'basic') {
            this.reportingState.updateReportStatus(this.type, 'chart', value);
        }
        else {
            this.mirroredChart = value;
        }
    }
    get isReady() {
        const isReady = this.initialized && !this.isLoading && this.reportingState.reportStatuses && this.status.loaded;
        return isReady;
    }

    get maxDate(): moment.Moment { return this.reportingState.maxDate; }

    get report() { return this.status.report; }
    set report(value) { this.reportingState.updateReportStatus(this.type, 'report', value); }

    get yearOnYear(): boolean | undefined {
        return this.status.yearOnYear;
    }

    private initialize(): string {
        this.setHighchartFormat();
        const options = this.chartBuilder.getChartOptions(this.type);
        let year: number | undefined = this.reportingState.reportingQuery ? this.reportingState.reportingQuery.year : undefined;
        if (year === undefined) {
            return 'failure:year';
        }
        this.reportingState.updateReportStatus(this.type, 'reportYear', year);

        // if (this.type === 'byAttribute') {
        //   this.reportingState.updateReportStatus(this.type, 'attribute', this.attribute);
        // }

        this.chart = new S4Chart(`${this.wrapper}${this.type}`, options);
        this.initialized = true;
        return 'success';
    }

    private retrieveData(): void {
        this.isLoading = true;
        this.isAwaitingMaxEventYear = false;
        this.isEmptySet = undefined;
        const initialization = this.initialize();
        if (initialization) {
            switch (initialization) {
                case 'failure:year':
                    // TODO: Handle elegantly (Deprecate???)
                    // this.isAwaitingMaxEventYear = true;
                    // this.reportingState.maxEventYear$.pipe(distinctUntilChanged()).subscribe(change => {
                    //   if (change && this.isAwaitingMaxEventYear) {
                    //     this.retrieveData();
                    //   }
                    // }).unsubscribe();
                    break;
                default: // success
                    this.report = undefined;
                    this.reportingState.getReportSeriesByType(this.type, this.priorYearCount, this.attribute)
                        .subscribe((response: ReportSeries | undefined) => {
                            if (!response) {
                                // TODO: Handle
                                // console.log('i had no response');
                            }
                            this.drawDataByType();
                        });
                    break;
            }
        }
        else { this.isLoading = false; }
    }

    private drawDataByType(): void {
        if (this.chart && this.chart.options && this.report) {
            // things all charts get
            this.chart.options.series = [];
            this.chart.options.title = {
                align: 'left',
                y: -10,
                text: `<span>${this.reportingState.getReportTitle(this.type)}</span>`,
                useHTML: true,
                style: { color: S4_PRIMARY, fontSize: 'calc(0.5vh + 18px)' }
            };
            this.chart.options.tooltip = {
                ...this.chart.options.tooltip,
                formatter: new TooltipFormatter().format
            };

            // all but 1 exceptions
            // emphasis area has an xAxis array to create negative stacking
            if (this.type !== 'emphasisArea') {
                this.chart.options.xAxis = {
                    ...this.chart.options.xAxis,
                    categories: this.report.categories,
                    crosshair: true
                };
            }

            switch (this.type) {
                case 'emphasisArea':
                    this.chart.options.title.text = `<span id="emphasisAreaTitle" class="simple-link cursor-pointer">${this.reportingState.getReportTitle(this.type)}</span>`;

                    if (this.reportingState.reportingQuery) {
                        let emphasisArea: string | undefined = this.reportingState.reportingQuery.query.emphasisAreaName;
                        this.chart.options = this.chartBuilder.getNegativeStackOptions(this.status, emphasisArea) as S4HighChart;
                    }
                    break;
                case 'byDay':
                    this.chart.options = this.chartBuilder.getByDayOptions(this.status) as S4HighChart;
                    break;
                case 'byMonth':
                    // let status:S4Report = this.chartBuilder.getByMonthOptions(this.status);
                    // if(status && status.chart && status.chart.options){
                    //     this.chart.options = status.chart.options as S4HighChart;
                    // }
                    // this.status = status;
                    break;
                case 'byAttribute':
                    this.setAttributeOptions();
                    break;
                case 'hourOfDay':
                    this.chart.options.xAxis = {
                        ...this.chart.options.xAxis,
                        labels: { step: 4 }
                    }; break;
                case 'dayOfWeek':
                    this.chart.options.xAxis = {
                        ...this.chart.options.xAxis,
                        categories: this.report.categories,
                        labels: {
                            formatter: function () {
                                return titleCase(this.value.toString().toLowerCase().split('').slice(0, 3).join(''));
                            }
                        }
                    };
                    break;
                case 'byYear':
                    let year = this.reportingState ? (this.reportingState.reportingQuery ? this.reportingState.reportingQuery.year : undefined) : undefined;
                    let categories = this.report.categories;
                    // console.log(year, categories);

                    const options: any = { ...this.chart.options };
                    let x: XAxisOptions = options.xAxis;
                    x.categories = categories;
                    if (year) {
                        x.crosshair = false;
                        categories.forEach((category: string, i: number) => {
                            if (category === year?.toString()) {
                                x.plotBands = [{
                                    from: i - 0.5,
                                    to: i + 0.5
                                }];
                            }
                        });
                    }
                    else {
                        x.crosshair = true;
                    }
                    break;
                default: break;
            }
            let opts = this.chartBuilder.addSeriesDataToChart(this.status);
            this.chart.options = this.handleEmptySets(opts as S4HighChart);
            this.isLoading = false; // finished data retrieval
            this.reportingState.updateReportStatus(this.type, 'loaded', true);
            // console.log(this)
        }
    }

    private reflectChange(reportStatus?: S4Report): void {
        // get report status
        if (reportStatus) {
            this.status = reportStatus;
        }
        else {
            this.status = this.reportingState.reportStatuses[this.type];
        }
        this.setHighchartFormat();
        if (this.status && this.status.chart && this.status.loaded) {
            const options = this.status.chart.options;
            this.mirroredChart = new S4Chart('displaychart', options);
            this.initialized = true;
            this.change.emit();
            this.isLoading = false;
            return;
        }
        if (!this.isLoading) {
            this.isLoading = true;
        }
    }

    private handleEmptySets(options: any): S4HighChart {
        let total = 0;
        options.series.forEach((seriesData: SeriesData) => {
            seriesData.data.forEach((dataPoint: number) => {
                total += dataPoint;
            });
        });
        if (total === 0) {
            options.series.forEach((seriesData: SeriesData) => {
                seriesData.data = [];
            });
        }
        return options;
        // // any because may be any one of 100 hicharts series types;
        // let series: any = (this.chart && this.chart.options && this.chart.options.series) ?
        //     this.chart.options.series : undefined;
        // if (series) {
        //     if (series.length === 0) {
        //         this.isEmptySet = true;
        //     }
        //     else {
        //         const data: number[][] = series.map((item: any) => item.data);
        //         let i: number = 0;
        //         data.forEach((item: number[]) => i += accumulate(item));
        //         if (i === 0) {
        //             this.isEmptySet = true;
        //         }
        //     }
        // }
    }

    private handleThumbChange(reportStatus: S4Report): void {
        if (this.status !== reportStatus) {
            this.status = reportStatus;
            if (!reportStatus.loaded) {
                this.retrieveData();
                return;
            }
        }
        else {
            if (!this.isLoading && !reportStatus.loaded) {
                this.retrieveData();
                return;
            }
        }
    }

    private setAttributeOptions(): void {
        if (this.chart && this.reportingState.attributes && this.reportingState.reportStatuses['byAttribute']) {
            if (this.reportingState.reportStatuses['byAttribute'].attribute) {
                const attrName = this.reportingState.reportStatuses['byAttribute'].attribute;
                const attrKey = this.reportingState.attributes[attrName];
                this.chart.options = this.chartBuilder.getByAttributeOptions(this.status, attrKey) as S4HighChart;
            }
        }
    }

    private setHighchartFormat(): void {
        if (this.type === 'byDay') {
            this.format = 'highstock';
        }
        else {
            this.format = 'highchart';
        }
    }

    private watchesStatus(): void {
        this.status$ = this.reportingState.reportStatuses$
            .pipe().subscribe((reports: { [key: string]: S4Report }) => {
                const reportStatus = reports[this.type];
                if (reportStatus) {
                    if (this.wrapper === 'display' || this.wrapper === 'mirrored') {
                        this.reflectChange(reportStatus);
                        return;
                    } else if (this.wrapper === 'thumb' || this.wrapper === 'basic') {
                        this.handleThumbChange(reportStatus);
                    }
                }
            });
    }
}
