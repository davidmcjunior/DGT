import { Component, OnInit } from '@angular/core';
import {SideOfRoadControl} from "../../../../../models/form/controls/crash-report/side-of-road.control";

@Component({
  selector: 'dgt-side-of-road',
  templateUrl: 'templates/text.template.html',
})
export class SideOfRoadComponent implements OnInit {
  constructor(public control: SideOfRoadControl) { }

  ngOnInit(): void {
  }

}
