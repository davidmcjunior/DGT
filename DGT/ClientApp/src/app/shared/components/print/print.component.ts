import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PrintService } from 'src/app/core/services';

// * two components - print-layout / print-content
// *
// * prints
// * has corresponding service
// *
// *

@Component({
  selector: 'print',
  styles: [
    '.header, .header-space, .footer, .footer-space { height: 2.5vh; }',
    '.header { position: fixed; top: 0; }',
    '.footer { position: fixed; bottom: 0; }',
    `.content{
      height: 90vh;
      width: 90vw;
      margin-left: 5vw;
      margin-right: 5vw;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
    }`,
    `@media screen {
      :host {
        display: none;
      }
    }`
  ],
  // * The page template for printing
  template: `
  <table>
    <thead><tr><td>
      <div class="header-space">&nbsp;</div>
    </td></tr></thead>
    <tbody><tr><td>
      <div class="content">
        <div #document></div>
      </div>
    </td></tr></tbody>
    <tfoot><tr><td>
      <div class="footer-space">&nbsp;</div>
    </td></tr></tfoot>
  </table>
  <div class="header"></div>
  <div class="footer"></div>
  `
})
export class PrintComponent implements OnInit {
  @ViewChild('document') document: HTMLElement;
  private hasDocument: boolean;

  constructor(private printService: PrintService, el: ElementRef) {
    this.document = el.nativeElement;
  }

  ngOnInit() {
    this.hasDocument = this.prepare();
    this.resolve();
  }

  private prepare = () => {
    let document = this.printService.document;
    if (document) {
      this.document.innerHTML = document.innerHTML;
      return true;
    }
    else {
      return false;
    }
  }

  private resolve = () => {
    Promise.resolve(this.hasDocument)
      .then(ready => {
        if (ready) {
          this.printService.onDocumentReady();
        }
        else {
          this.handleError();
        }
      });
  }
  private handleError = () => {
    // TODO
  }
}
