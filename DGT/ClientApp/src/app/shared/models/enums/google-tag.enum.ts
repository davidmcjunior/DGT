export enum GoogleTagCategory {
  Interaction,
  Filter,
  Chart,
  Map,
  User
}

export enum GoogleTagUserEventAction {
  SignIn,
  SignInWithToken,
  SignOut,
  Refresh,
  HideLastUpload
}

export enum GoogleTagMapEventAction {
  ZoomIn,
  ZoomOut,
  ZoomToState,
  ResetToNorth,
  Set3D,
  Set2D
}

export enum GoogleTagFilterEventAction {
  Year,
  GeographicCategory,
  GeographicArea,
  ReportingAgency,
  EmphasisArea,
  InjurySeverity
}

export enum GoogleTagChartEventAction {
  EmphasisArea,
  DayOfWeek,
  HourOfDay,
  InjuriesByYear,
  InjuriesByMonth,
  AgeGroups
}
