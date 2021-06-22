import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'dgt-crash-event-record-dynamic-field',
  templateUrl: './crash-event-record-dynamic-field.component.html',
  styleUrls: ['./crash-event-record-dynamic-field.component.scss']
})
export class CrashEventRecordDynamicFieldComponent implements OnInit {
  @Input() control: any;
  @Input() form: FormGroup;

  @Output('update') change = new EventEmitter<any>();

  constructor() {
  }

  public ngOnInit(): void {
  }

  // get isValid(): boolean {
  //   return this.form.controls[this.control.key].valid;
  // }

  public onChange(sender: string, $event: Event): void {
    // @ts-ignore
    const value = $event.target.value;
    this.change.emit({sender, value});
  }

}
