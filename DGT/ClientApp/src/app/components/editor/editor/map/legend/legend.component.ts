import { Component } from "@angular/core";
import { ETL_GEOLOCATION_STATUSES } from "app/models/constants";

@Component({
  selector: 'dgt-legend',
  templateUrl: './legend.component.html'
})

export class LegendComponent {
  private _expanded = false;

  public legendItems = [
    {title: ETL_GEOLOCATION_STATUSES[0], color: 'officer-mapped'},
    {title: ETL_GEOLOCATION_STATUSES[1], color: 'computer-confident'},
    {title: ETL_GEOLOCATION_STATUSES[2], color: 'computer-tie'},
    {title: ETL_GEOLOCATION_STATUSES[3], color: 'computer-approximate'},
    {title: ETL_GEOLOCATION_STATUSES[4], color: 'lat-long-plot'}
  ]

  get isExpanded(): boolean { return this._expanded; }
  set isExpanded(value: boolean) { this._expanded = value; }

}
