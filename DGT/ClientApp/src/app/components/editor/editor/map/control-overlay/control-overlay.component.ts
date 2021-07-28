import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'dgt-control-overlay',
  templateUrl: './control-overlay.component.html'
})

export class ControlOverlayComponent {
  @Output() zoomIn = new EventEmitter<void>();
  @Output() zoomOut = new EventEmitter<void>();
  @Output() zoomToState = new EventEmitter<void>();
  @Output() zoomToCurrent = new EventEmitter<void>();

  constructor() { }
  onZoomToCurrent() {
    this.zoomToCurrent.emit();

  }
  onZoomToState() {
    this.zoomToState.emit();
  }

  onZoomIn() {
    this.zoomIn.emit();
  }

  onZoomOut() {
    this.zoomOut.emit();
  }
}
