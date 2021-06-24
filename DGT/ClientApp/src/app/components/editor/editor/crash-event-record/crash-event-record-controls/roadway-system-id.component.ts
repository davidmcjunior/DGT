import { Component, OnInit } from '@angular/core';
import {RoadwaySystemIdControl} from "../../../../../models/form/controls/crash-report/roadway-system-id.control";

@Component({
  selector: 'dgt-road-system-id',
  templateUrl: 'templates/text.template.html',
})
export class RoadwaySystemIdComponent implements OnInit {
  constructor(private control:  RoadwaySystemIdControl) { }

  ngOnInit(): void {
  }

}
