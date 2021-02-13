import { LookupKeyAndName, QueryRef, DateTimeScope, PlaceScope } from '..';
import { SidePanelTab } from 'src/app/shared/models/enums';
import { Subject } from 'rxjs';

export class EventAnalysisState {
  allGeogBoundaries: LookupKeyAndName[];
  autoZoomToExtent = true;
  crashQueryRef: QueryRef;
  currentMapExtent: number[];
  dateInitialized = false;
  dateTimeScope: DateTimeScope;
  heatMapDefault = false;
  loading = false;
  notify = new Subject<any>();
  placeScope: PlaceScope;
  selectedExtentMode: string;
  selectedQuery: string;
  selectedTab: SidePanelTab;
  settingQuery: boolean;
  showAllFilters = false;
  switchToCharts = false;
  constructor() {
    this.allGeogBoundaries = [];
    this.dateTimeScope = new DateTimeScope();
    this.placeScope = new PlaceScope();
    this.selectedExtentMode = 'Statewide';
    this.dateInitialized = false;
    this.heatMapDefault = false;
    this.autoZoomToExtent = true;
    this.showAllFilters = false;
    this.switchToCharts = false;
    this.loading = false;
    this.notify = new Subject();
    this.settingQuery = false;
    this.selectedTab = SidePanelTab.Filters;
    this.selectedQuery = '';
  }
}
