import {Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren} from '@angular/core';
import {GeocodeService} from "app/services/s4/geocode.service";

@Component({
  selector: 'dgt-mode-buttons',
  templateUrl: './mode-buttons.component.html'
})
export class ModeButtonsComponent implements OnInit {
  @Output('modeChanged') modeChanged = new EventEmitter<any>();
  @ViewChild('btnContainer') btnContainer: HTMLElement;

  constructor(private reverseGeocoder: GeocodeService) { }

  ngOnInit(): void {

  }

  onClick(mode: string): void {
    this.reverseGeocoder.mode$.next(mode);
  }
}
