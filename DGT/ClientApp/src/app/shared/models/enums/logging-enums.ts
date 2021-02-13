
export enum LogType {
  Filter,
  UserMgt,
  DataMgt,
  CrashEvt,
  Reporting,
  Query,
  LEChallenge
}

export enum CrashAppTypeEnum {
  UserAuth,
  UserSignedOut,
  ViewCrashRptFailed,
  DownloadDataEmail,
  FeedbackEmail,
  IntersectionRankQuery,
  SegmentRankQuery,
  ViolationQuery,
  CrashQuery,
  CrashRptRetrieved,
  SelectedCrashPts,
  SelectedNetworkPts,
  SelectedViolationPts,
  EventAnalysis,
  Reporting,
  Administration,
  Logging
}

export enum SelectionSrcEnum {
  Map,
  DataGrid,
  BarChart,
  TwoDBubbleChart
}

export enum AuthFailReasonEnum {
  AccountNotActive,
  AccountDoesNotExist,
  AccountExpired,
  IncorrectPassword
}

export enum AuthStatusEnum {
  Success,
  Fail
}

export enum DataMgtEventTypeEnum {
  BatchLoadComplete,
  BatchGCComplete,
  CrashRptGC,
  ChartExported,
  CrashDataExported
}

export enum ChartTypeEnum {
  Bar,
  Pie,
  TwoDBubble
}

export enum ReportEventTypeEnum {
  ReportQuery,
  ReportByYearModified,
  ReportByMonthModified,
  ReportByDayModified,
  ReportByAttributeModified,
  DataTimeliness,
  LEChallenge
}

export enum ReportSourceEnum {
  Crash,
  Citation
}

export enum ReportViewModified {
  AllData,
  YearToDate,
  DateToEndOfYear,
  YearOnYearChecked,
  YearOnYearUnchecked,
  SelectedYear,
  ViewSelectedAndPrev,
  ViewSelectedOnly,
  ViewPreviousOnly,
  AlignByWeekChecked,
  AlignByWeekUnchecked,
  DataDensity,
  Attribute,
  ZeroTo10Days,
  ElevenTo30Days,
  ThirtyOnePlusDays
}

export enum UserMgtEvtTypeEnum {
  UserAcctCreated,
  UserAcctDeleted,
  ConsultantAcctCreated,
  ConsultantAcctDeleted,
  AgncyCreated,
  AgncyDeleted,
  VendorCreated,
  VendorDeleted,
  UserAcctUpdated,
  AgncyUpdated,
  VendorUpdated,
  AdminAgreeSigned,
  UserAgreeSigned,
  PwdResetEmail,
  PwdResetEmailFail,
  AcctCreatedEmailFailed,
  ExportUsers,
  ExportGeolocStats,
  ExportStats,
  ViewUserManagers,
  ViewAllRequests,
  ViewPendingRequests,
  ViewCompletedRequests,
  ViewRejectedRequests,
  ViewRequest,
  EmailUserManagers
}

export enum AccountTypeEnum {
  User,
  Consultant,
  FHP,
  PoliceDept,
  SheriffsOffice,
  Other
}

export enum UserUpdateEnum {
  FirstName,
  LastName,
  Email,
  StartTime,
  EndTime,
  RoleRemoved,
  RoleAdded,
  TimeLimited,
  NotTimelimited,
  GeographicAreasAdded,
  GeographicAreasRemoved,
  ReportAccess,
  Agency,
  Vendor,
  Password,
  IsActive,
  AgencyName,
  AgencyDomain,
  AgencyType,
  ParentId,
  VendorName,
  VendorDomain
}


export enum LEChallengeLogType {
  Query,
  Download
}

