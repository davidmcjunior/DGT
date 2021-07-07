import {Component, ViewChild, ElementRef, Input, OnInit, AfterViewInit} from '@angular/core';
import { CrashEventService } from 'app/services/s4/crash-event.service';
import {LoadingOverlayComponent} from "../../shared/loading-overlay.component";
import {ButtonsBarComponent} from "./buttons-bar/buttons-bar.component";

@Component({
  selector: 'dgt-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit, AfterViewInit {
  @ViewChild(LoadingOverlayComponent) loadingOverlay: LoadingOverlayComponent;
  @ViewChild(ButtonsBarComponent) buttonBar: ButtonsBarComponent;

  constructor(private crashEvent: CrashEventService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.crashEvent.recordIsLoaded$.subscribe((isLoaded) => {
      if (isLoaded) {
        this.loadingOverlay.hide();
      } else {
        this.loadingOverlay.show();
      }
    });
  }

}

