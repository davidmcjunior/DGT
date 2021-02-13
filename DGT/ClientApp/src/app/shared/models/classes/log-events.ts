import { CrashQuery } from './queries';
import {
  LogType, CrashAppTypeEnum, SelectionSrcEnum, AuthStatusEnum,
  AuthFailReasonEnum, UserMgtEvtTypeEnum, AccountTypeEnum, UserUpdateEnum,
  ReportEventTypeEnum, ReportSourceEnum, ReportViewModified,
  DataMgtEventTypeEnum, ChartTypeEnum, LEChallengeLogType, DownloadFormat
} from '../enums';

export class LogEvent {
  logType: LogType;
  authUserId: string;
  dt: Date;

  constructor() {

  }
}

export class CrashAppLogEvent extends LogEvent {
  eventType: CrashAppTypeEnum;
  count: number;
  selectionSrc?: SelectionSrcEnum;
  queryId?: number;
  query?: CrashQuery;
  executionTimeSecs?: number;
  status?: AuthStatusEnum;
  failedReason?: AuthFailReasonEnum;
  rptNumbers?: number[];

  constructor(result: CrashAppLogEvent) {
    super();
    Object.assign(this, result);
    this.dt = new Date(this.dt);
  }
}

export class UserMgtLogEvent extends LogEvent {
  eventType: UserMgtEvtTypeEnum;
  accountId: string;
  name: string;
  emailOrDomain?: string;
  reqNbr?: number;
  acctType: AccountTypeEnum;
  updateMade?: UserUpdateEnum;
  fromDt?: Date;
  toDt?: Date;

  constructor(result: UserMgtLogEvent) {
    super();
    Object.assign(this, result);
  }
}

export class ReportingLogEvent extends LogEvent {
  eventType: ReportEventTypeEnum;
  reportSource: ReportSourceEnum;
  queryId: number;
  viewModified: ReportViewModified;

  constructor(result: ReportingLogEvent) {
    super();
    Object.assign(this, result);
  }
}

export class DataMgtLogEvent extends LogEvent {
  eventType: DataMgtEventTypeEnum;
  batchNbr?: number;
  count?: number;
  reportNbr?: number;
  chartType?: ChartTypeEnum;
  csvIncluded?: boolean;
  imagesIncluded?: boolean;
  gisIncluded?: boolean;
  pbcatIncluded?: boolean;
  rptNumbers?: number[];

  constructor(result: DataMgtLogEvent) {
    super();
    Object.assign(this, result);
  }
}

export class LEChallengeLogEvent extends LogEvent {
  eventType: LEChallengeLogType;
  recordCount?: number;
  executionTimeMS?: number;
  year?: number;
  county?: number;
  agencies?: number[];
  cities?: number[];
  queryGuidAsString: string;
  downloadFormat?: DownloadFormat;
  constructor(type: LEChallengeLogType, userName: string, guid: any) {
    super();
    this.logType = LogType.LEChallenge;
    this.authUserId = userName;
    this.dt = new Date();
    this.eventType = type;
    this.queryGuidAsString = guid;
  }
}
