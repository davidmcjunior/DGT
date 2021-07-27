import { Component, Input, OnInit } from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {EditorQueueService} from "../../../../services/s4/editor-queue.service";

@Component({
  selector: 'dgt-title-bar',
  templateUrl: './status-bar.component.html'
})
export class StatusBarComponent implements OnInit {
  @Input('hsmvReportNumber') hsmvReportNumber: string = 'Hold on...';
  @Input('etlCode') etlCode: string;

  constructor(private crashEvent: CrashEventService, private queue: EditorQueueService) {
  }

  ngOnInit(): void {
    this.crashEvent.recordIsLoaded$.subscribe(isLoaded => {
      if (isLoaded) {
        this.crashEvent.record$.subscribe(record => {
          this.hsmvReportNumber = `HSMV Report Number: ${record.hsmvReportNumber}`;
          if (record.geocoding?.etlGeoLocationStatus) {
            this.etlCode = record.geocoding?.etlGeoLocationStatus;
          }
        });
      }
    });
  }

}
