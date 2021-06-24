import { Component, Input, OnInit } from '@angular/core';
import { CrashEvent } from 'app/models/crash-event/crash-event';

@Component({
  selector: 'dgt-title-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  // @Input() currentRecord: CrashEvent;

  ngOnInit(): void {

  }

}
