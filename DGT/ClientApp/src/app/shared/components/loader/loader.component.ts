import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderStateService } from 'src/app/core/services';
import { LoaderState } from '../../models';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from '../../animations';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  animations: [
    fadeInOnEnterAnimation({ anchor: 'fadeIn', duration: 75 }),
    fadeOutOnLeaveAnimation({ anchor: 'fadeOut', duration: 75 })
  ]
})


/*
* Two loaders 'overlay' and 'embedded'
* only 1 of type 'overlay' and it sits in app component. controlled via loader state service
* many loaders of type 'embedded' their animation runs while they are in the dom
*/
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() type: 'overlay' | 'embedded';
  show = false;
  private subscription?: Subscription;
  constructor(
    private loaderService: LoaderStateService
  ) { }
  ngOnInit() {
    if (this.type === 'overlay') {
      this.subscription = this.loaderService.loader$
        .subscribe((state: LoaderState) => {
          this.show = state.show;
        });
    }
  }
  ngOnDestroy() {
    if (this.type === 'overlay') {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }
}
