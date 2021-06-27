import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrashEvent } from 'app/models/crash-event/crash-event';

@Component({
  selector: 'dgt-readonly-attributes',
  templateUrl: './readonly-attributes.component.html',
  styleUrls: ['./readonly-attributes.component.scss']
})
export class ReadonlyAttributesComponent implements OnInit {
  // @Input() currentRecord: CrashEvent;

  public noVal = '(No Value)';

  ngOnInit(): void {
  }

}
