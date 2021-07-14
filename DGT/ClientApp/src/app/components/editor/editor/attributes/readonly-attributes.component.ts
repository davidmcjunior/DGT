import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dgt-readonly-attributes',
  templateUrl: './readonly-attributes.component.html'
})
export class ReadonlyAttributesComponent implements OnInit {
  // @Input() currentRecord: CrashEvent;

  public noVal = '(No Value)';

  ngOnInit(): void {
  }

}
