import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { ReportingStateService } from 'src/app/core/services';
import { ReportType } from 'src/app/shared/constants';

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html'
})
export class ThumbnailComponent implements OnChanges {
  @Input() key: string | ReportType;
  @Input() selected: string;
  @Input() category: 'crash' | 'citation';
  @Input() label: string;
  @Output() select = new EventEmitter<string>();
  isSelected = false;

  constructor(private reportingState: ReportingStateService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.key && changes.selected) {
      this.isSelected = this.selected === this.key;
    }
  }

  onSelect(): void {
    this.select.emit(this.key);
  }
}
