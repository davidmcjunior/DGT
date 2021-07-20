import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ReverseGeocodeService} from "app/services/s4/reverse-geocode.service";

@Component({
  selector: 'dgt-mode-buttons',
  templateUrl: './mode-buttons.component.html'
})
export class ModeButtonsComponent implements OnInit {
  @Output('modeChanged') modeChanged = new EventEmitter<any>();

  constructor(private reverseGeocoder: ReverseGeocodeService) { }

  ngOnInit(): void {

  }

  onClick(mode: string): void {
    this.reverseGeocoder.mode$.next(mode);
  }
}
