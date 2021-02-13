import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AppStateService } from '../../../core/services';
import { AppCategory, LightOrDark } from '../../constants';

@Component({
  selector: 'category-bar',
  templateUrl: './category-bar.component.html'
})

export class CategoryBarComponent implements OnChanges {
  @Input() closeable = false; // if true template includes a close button
  @Input() disabled = false; // if true kills css properties, only prevents user from going to citations
  @Input() theme: LightOrDark = 'dark';
  @Output() select = new EventEmitter<any>();
  public categories: { category: AppCategory, label: string, icon: string, customIcon: boolean, value: AppCategory }[] = [
    { category: 'crash', label: 'crashes', icon: 'car-crash', customIcon: false, value: 'crash' },
    { category: 'citation', label: 'citations', icon: 'police', customIcon: true, value: 'citation' },
    { category: 'citation', label: 'roadway', icon: 'road', customIcon: false, value: 'citation' },
    { category: 'citation', label: 'ems', icon: 'ambulance', customIcon: false, value: 'citation' }
  ];
  constructor(private app: AppStateService) { }
  ngOnChanges() {

  }
  get category(): AppCategory { return this.app.category; }


  // the conditional restraints will be removed once citation searches are more widely implemented
  // some pages disable category selection while a query is in progress
  onSelect(value: AppCategory) {
    if (this.category === 'citation' || (this.category === 'crash' && !this.disabled)) {
      this.select.emit(value);
    }
  }


}
