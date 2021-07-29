import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChildren } from '@angular/core';
import { ArcgisSuggestion as Suggestion} from 'app/models/geolocation/suggestion/arcgis/arcgis-suggestion';
import { ArcGisSuggestionService as SuggestionService } from 'app/services/arcgis/arcgis-suggestion.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'dgt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  suggestions: Suggestion[];
  location: Location;
  input = new FormControl();
  classList = 'search';

  // @Input() currentRecord: CrashEvent;
  @Output('locationChanged') locationChanged = new EventEmitter<any>();

  constructor(private service: SuggestionService) {
  }

  ngOnInit(): void {
    // https://v5.material.angular.io/components/autocomplete/api

    this.input.valueChanges
      .pipe(debounceTime(400))
      .subscribe(input => {
        this.service.getSuggestions(input)
          .pipe(distinctUntilChanged())
          .subscribe((result: { candidates: Suggestion[]; }) => {
            this.suggestions = result.candidates;
          });
      });
  }

  public onClearInput(el:any) {
    this.input.setValue(null);
    el.focus();
  }

  public onSuggestionSelect(suggestion: Suggestion): void {
    // this.input.setValue('');
    // this.suggestions = [];
    let lngLat: mapboxgl.LngLatLike | undefined;
    if (suggestion && suggestion.location ){
      lngLat = [suggestion.location.x, suggestion.location.y];
    }
    this.locationChanged.emit(lngLat);
  }
}

