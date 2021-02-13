import { Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html'
})

export class TabsComponent implements OnInit {
    @Input() tabs: any[];
    @Input() customClasses = '';
    @Output() select = new EventEmitter<any>();
    selected: string;
    selectedIndex: number;
    ngOnInit() {
        this.onSelect(this.tabs[0], 0);
    }
    get classList() { return `cursor-pointer d-flex flex-column tab pt-1 ${this.customClasses}` }
    onSelect(tab: string, i: number): void {
        this.selected = tab;
        this.selectedIndex = i;
        this.select.emit(tab);
    }
}
