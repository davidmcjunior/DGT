import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { tooltips, TooltipKey, Position, LightOrDark } from '../../constants';
import { NameAndDescription } from '../../models';

@Component({
    selector: 's4-tooltip',
    templateUrl: './tooltip.component.html',
    encapsulation: ViewEncapsulation.None
})

export class TooltipComponent implements OnInit {
    @Input() key: TooltipKey;
    @Input() hasIcon: boolean = false;
    @Input() position: Position = 'right';
    @Input() color: LightOrDark = 'dark';
    public isReady = false;
    public tooltip: NameAndDescription = { name: undefined, description: undefined };

    constructor() { }

    ngOnInit(): void {
        let tooltip: NameAndDescription = tooltips[this.key];
        if (tooltip.name && tooltip.description) {
            this.tooltip.name = tooltip.name;
            this.tooltip.description = tooltip.description;
            this.isReady = true;
        }
    }

    get iconClass(): string {
        let clr = this.color === 'dark' ? 'on-bg' : 'on-primary';
        return `cursor-pointer fal fa-question-circle fa-xs hover-fill ${clr}`;
    }
}
