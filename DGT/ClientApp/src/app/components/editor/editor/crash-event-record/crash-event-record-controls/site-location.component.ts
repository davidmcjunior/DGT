import { Component, OnInit } from '@angular/core';
import {SiteLocationControl} from "app/models/form/controls/crash-report/site-location.control";
import {CrashEventService} from "app/services/s4/crash-event.service";

@Component({
  selector: 'dgt-site-location',
  templateUrl: 'templates/text.template.html',
})
export class SiteLocationComponent implements OnInit {
  constructor(private crashEventService: CrashEventService, public control: SiteLocationControl) { }

  ngOnInit(): void {
  }

}
