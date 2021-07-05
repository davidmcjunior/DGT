import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dgt-loading-overlay',
  templateUrl: './loading-overlay.component.html',
})
export class LoadingOverlayComponent implements OnInit {
  @Input('visible') visible: boolean = true;

  public show(): void {
    this.visible = true;
  }

  public hide(): void {
    this.visible = false;
  }

  ngOnInit(): void {
  }

}
