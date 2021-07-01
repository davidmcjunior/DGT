import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CrashEventService} from "../../../../services/s4/crash-event.service";

@Component({
  selector: 'dgt-buttons-bar',
  templateUrl: './buttons-bar.component.html',
  styleUrls: ['./buttons-bar.component.scss']
})
export class ButtonsBarComponent implements OnInit {


  constructor(private crashEvent: CrashEventService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {}

  giveUp(): void {
    console.log(this.crashEvent.getCurrentRecord());
  }

}
