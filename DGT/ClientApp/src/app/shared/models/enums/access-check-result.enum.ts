export enum AccessCheckResult {
  Allowed,
  DeniedBySixtyDayRestriction,
  DeniedByAgencyRestriction,
  DeniedByGuestRestriction,
  DeniedByCountyRestriction,
  NoReportAvailable,
  Unauthorized
}
