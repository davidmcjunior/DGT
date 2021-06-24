import { Component, OnInit } from '@angular/core';
import {DotPropertyControl} from "../../../../../models/form/controls/crash-report/dot-property.control";

@Component({
  selector: 'dgt-dot-property',
  templateUrl: 'templates/text.template.html',
})
export class DotPropertyComponent implements OnInit {
  constructor(private control: DotPropertyControl) { }

  ngOnInit(): void {
  }

}
