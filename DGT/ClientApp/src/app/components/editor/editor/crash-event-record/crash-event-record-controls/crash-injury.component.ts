import { Component, OnInit } from '@angular/core';
import {CrashInjuryControl} from "../../../../../models/form/controls/crash-report/crash-injury.control";

@Component({
  selector: 'dgt-crash-injury',
  templateUrl: 'templates/text.template.html',
})
export class CrashInjuryComponent implements OnInit {
  constructor(private control: CrashInjuryControl) { }

  ngOnInit(): void {
  }

}
