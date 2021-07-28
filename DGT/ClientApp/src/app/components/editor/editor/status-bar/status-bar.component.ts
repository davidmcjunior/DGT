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
  @Input('queuePosition') queuePosition: string;

  constructor(private _crashEvent: CrashEventService, private _queue: EditorQueueService) {
  }

  ngOnInit(): void {
    this._crashEvent.serviceIsLoaded$.subscribe(isLoaded => {
      if (isLoaded) {
        this._crashEvent.record$.subscribe(record => {
          this.hsmvReportNumber = `HSMV Report Number: ${record.hsmvReportNumber}`;
          if (record.geocoding?.etlGeoLocationStatus) {
            this.etlCode = record.geocoding?.etlGeoLocationStatus.toLowerCase().replace(' ', '-');
          }
        });
      }
    });

    this._queue.serviceIsLoaded$.subscribe(isLoaded => {
      if (isLoaded) {
        this._queue.position$.subscribe(position => {
          this.queuePosition = `${position + 1}/${this._queue.getSize()}`;
        });
      }
    });
  }

}
