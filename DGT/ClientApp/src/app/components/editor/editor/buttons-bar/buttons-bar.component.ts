import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { CrashEvent } from 'app/models/crash-event/crash-event';

@Component({
  selector: 'dgt-buttons-bar',
  templateUrl: './buttons-bar.component.html',
  styleUrls: ['./buttons-bar.component.scss']
})
export class ButtonsBarComponent implements OnInit {
  // @Input() currentRecord: CrashEvent;
  public formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    // const cr = this.currentRecord;

    this.formGroup = this.fb.group({

    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {}

  giveUp(): void {}

}
