import { Component, OnInit } from '@angular/core';
import {CrashLaneControl} from "../../../../../models/form/controls/crash-report/crash-lane.control";

@Component({
  selector: 'dgt-crash-lane',
  templateUrl: 'templates/text.template.html',
})
export class CrashLaneComponent implements OnInit {
  constructor(public control: CrashLaneControl) { }

  ngOnInit(): void {
  }

}
