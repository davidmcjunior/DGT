import { Component, OnInit } from '@angular/core';
import {OnPublicRoadsControl} from "../../../../../models/form/controls/crash-report/on-public-roads.control";

@Component({
  selector: 'dgt-location-only',
  templateUrl: 'templates/text.template.html',
})
export class OnPublicRoadsComponent implements OnInit {
  constructor(public control: OnPublicRoadsControl) { }

  ngOnInit(): void {
  }

}
