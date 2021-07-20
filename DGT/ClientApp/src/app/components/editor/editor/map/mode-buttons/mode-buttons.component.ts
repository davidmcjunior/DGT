import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GeocodeService} from "app/services/s4/geocode.service";

@Component({
  selector: 'dgt-mode-buttons',
  templateUrl: './mode-buttons.component.html'
})
export class ModeButtonsComponent implements OnInit {
  @Output('modeChanged') modeChanged = new EventEmitter<any>();

  constructor(private reverseGeocoder: GeocodeService) { }

  ngOnInit(): void {

  }

  onClick(mode: string): void {
    this.reverseGeocoder.mode$.next(mode);
  }
}