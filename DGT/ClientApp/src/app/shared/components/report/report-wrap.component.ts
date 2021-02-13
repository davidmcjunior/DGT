import { Component, OnInit, Input } from '@angular/core';
import { ReportingStateService } from 'src/app/core/services';
import { S4Report } from 'src/app/shared/models';
import { FrameType, ReportType } from '../../constants';

@Component({
  selector: 'report-wrapper',
  templateUrl: './report-wrap.component.html'
})
export class ReportWrapperComponent implements OnInit {
  @Input() type: string;
  @Input() wrapper: FrameType = 'basic';
  @Input() attribute?: string;
  isReady = false;
  reportType: string;
  reportStatus?: S4Report;
  _placeTitle = '';
  reportTitle = '';
  countTotals: { crashes: number, participants: number; seriousInjuries: number; fatalities: number; fatalCrashes: number; seriousInjuryCrashes: number; };
  constructor(private reportingState: ReportingStateService) { }

  ngOnInit() {
    this.reportingState.countTotals.subscribe(totals => {
      this.countTotals = totals;
    });
    this.placeTitle = '';
    this.reportTitle = '';
    const type = this.reportType = this.type;
    if (type) {
      this.getTitle();
      const report: S4Report = this.reportingState.reportStatuses[type];
      this.reportStatus = report;
      this.isReady = true;
    }
  }


  get attributes() { return this.reportingState.attributes; }

  get attributeKeys() { return this.reportingState.attributeKeys; }

  get alignByWeek(): boolean | undefined {
    return this.reportStatus ? this.reportStatus.alignByWeek : undefined;
  }
  set alignByWeek(value) {
    this.reportingState.updateReportStatus(this.type, 'alignByWeek', value);
    this.reportingState.updateReportStatus(this.type, 'loaded', false);
  }
  get canAlignByWeek(): boolean { return this.alignByWeek !== undefined ? true : false; }
  get canShowEmphasisAreaTotals(): boolean { return this.type === 'emphasisArea' && this.wrapper !== 'thumb'; }
  get canShowDataTimelinessMsg(): boolean { return this.type === 'dataTimliness' && this.wrapper !== 'thumb'; }
  get hasYearOnYear(): boolean {
    if (this.reportType === 'byMonth') {
      return true;
    }
    else { return false; }
    // // should be something more like this
    // if (this.reportStatus && this.reportStatus.yearOnYear !== undefined) {
    //   return true;
    // }
    // return false;
  }

  get priorYearCount() { return this.years.length; }

  get placeTitle(): string { return this._placeTitle; }
  set placeTitle(value: string) { this._placeTitle = value; }

  get reportYear(): number | undefined { return this.reportingState.reportingQuery ? this.reportingState.reportingQuery.year : undefined; }
  set reportYear(value) {
    this.reportingState.updateReportStatus(this.type, 'reportYear', value);
    this.reportingState.updateReportStatus(this.type, 'loaded', false);
  }

  get selectedAttributeKey(): string | undefined {
    return this.reportStatus ? this.reportStatus.attribute : undefined;
  }
  set selectedAttributeKey(value) {
    this.reportingState.updateReportStatus(this.type, 'attribute', value);
    this.reportingState.updateReportStatus(this.type, 'loaded', false);
  }

  get yearOnYear(): boolean | undefined {
    return this.reportStatus ? this.reportStatus.yearOnYear : undefined;
  }
  set yearOnYear(value) {
    this.reportingState.updateReportStatus(this.type, 'yearOnYear', value);
    this.reportingState.updateReportStatus(this.type, 'loaded', false);
  }

  get years(): number[] { return this.reportingState.getYears(); }

  public getTitle(): void {
    this.placeTitle = this.reportingState.displayPlaces;
    const type = this.reportType ? this.reportType : '';
    this.reportTitle = this.reportingState.getReportTitle(<ReportType>type);
  }
}

