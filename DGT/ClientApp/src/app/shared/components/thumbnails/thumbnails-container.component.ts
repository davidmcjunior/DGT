import { Component, Output, EventEmitter, Input } from '@angular/core';
import { slideInRightOnEnterAnimation, fadeInOnEnterAnimation } from 'src/app/shared/animations';
import { AppCategory } from 'src/app/shared/constants';

@Component({
  selector: 'thumbnails',
  templateUrl: './thumbnails-container.component.html',
  animations: [
    fadeInOnEnterAnimation({ anchor: 'fadeIn', delay: 750, animateChildren: 'after' }),
    slideInRightOnEnterAnimation({ anchor: 'slideInR', translate: '1000%' }),
  ]
})
export class ThumbnailsContainerComponent {
  @Input() thumbnails: string[];
  @Output() select = new EventEmitter<any>();
  selected: string = '';
  hasThumbnails = false;
  category: AppCategory;

  constructor() { }

  public onSelect(event: string): void {
    this.selected = event;
    this.select.emit(event);
  }

  public enterDelay(i: number): number { return 100 * i; }
}
