import {Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren} from '@angular/core';
import {GeocodeService} from "app/services/s4/geocode.service";

@Component({
  selector: 'dgt-mode-buttons',
  templateUrl: './mode-buttons.component.html'
})
export class ModeButtonsComponent {
  constructor(private reverseGeocoder: GeocodeService) { }
  get currentMode() {return this.reverseGeocoder.mode$.value; }
  onClick(mode: string): void {
    if (mode === this.currentMode) {
      mode = '';
    }
    this.reverseGeocoder.mode$.next(mode);
  }
}
