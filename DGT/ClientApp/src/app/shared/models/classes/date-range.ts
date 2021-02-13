export class DateRange {
  isFormatted: boolean;
  start?: Date;
  end?: Date;

  constructor(dateRange?: DateRange) {
    if (dateRange) {
      if (dateRange.start) {
        this.start = dateRange.start;
        if (dateRange.end) {
          this.end = dateRange.end;
          this.isFormatted = true;
          return;
        }
        else {
          this.end = new Date();
          this.isFormatted = false;
          return;
        }
      }
      else {
        this.start = new Date();
      }

      if (dateRange.end) {
        this.end = dateRange.end;
      }
      else {
        this.end = new Date();
      }
      this.isFormatted = false;
    }
    else {
      this.start = new Date();
      this.end = new Date();
      this.isFormatted = false;
    }
  }
}
