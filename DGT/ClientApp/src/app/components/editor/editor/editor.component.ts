import {Component, ViewChild, ElementRef, Input, OnInit, AfterViewInit} from '@angular/core';
import { CrashEvent } from 'app/models/crash-event/crash-event';
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
  currentRecord: CrashEvent | undefined;
  constructor(private crashEvent: CrashEventService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.crashEvent.recordIsLoaded$.subscribe((isLoaded) => {
      if (isLoaded === true) {
      this.currentRecord = this.crashEvent.getCurrentRecord();

        this.loadingOverlay.hide();
      } else {
        this.loadingOverlay.show();
        this.currentRecord = undefined;
      }
    });
  }

}

