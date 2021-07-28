import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CrashEventService} from "app/services/s4/crash-event.service";
import {EditorQueueService} from "app/services/s4/editor-queue.service";

@Component({
  selector: 'dgt-buttons-bar',
  templateUrl: './buttons-bar.component.html'
})
export class ButtonsBarComponent implements OnInit {
  @Output('loadRecord') loadRecord = new EventEmitter<any>();

  constructor(private crashEvent: CrashEventService, private queue: EditorQueueService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {}

  giveUp(): void {
    this.loadRecord.emit();
    this.crashEvent.next(this.queue.next());
  }

  skip(): void {
    this.loadRecord.emit();
    this.crashEvent.next(this.queue.next());
  }

  goBack(): void {
    this.loadRecord.emit();
    this.crashEvent.next(this.queue.prev());
  }

  save(): void {
    this.loadRecord.emit();
    this.crashEvent.next(this.queue.next());
  }

}
