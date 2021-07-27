import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {EditorQueueService} from "app/services/s4/editor-queue.service";

@Component({
  selector: 'dgt-buttons-bar',
  templateUrl: './buttons-bar.component.html',
  styleUrls: ['./buttons-bar.component.scss']
})
export class ButtonsBarComponent implements OnInit {
  @Output('loadRecord') loadRecord = new EventEmitter<any>();

  constructor(private crashEvent: CrashEventService, private queue: EditorQueueService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {}

  giveUp(): void {
    console.log(this.crashEvent.getCurrentRecord());
  }

  skip(): void {
    this.loadRecord.emit();
    this.crashEvent.next(this.queue.next());
  }

  goBack(): void {
    this.loadRecord.emit();
    this.crashEvent.next(this.queue.prev());
  }

}
