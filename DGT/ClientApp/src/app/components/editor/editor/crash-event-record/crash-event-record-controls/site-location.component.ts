import { Component, OnInit } from '@angular/core';
import {SiteLocationControl} from "../../../../../models/form/controls/crash-report/site-location.control";

@Component({
  selector: 'dgt-site-location',
  templateUrl: 'templates/text.template.html',
})
export class SiteLocationComponent implements OnInit {
  constructor(public control: SiteLocationControl) { }

  ngOnInit(): void {
  }

}
