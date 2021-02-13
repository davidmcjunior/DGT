import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { fadeInUpOnEnterAnimation, fadeOutDownOnLeaveAnimation, slideInLeftOnEnterAnimation, slideInRightOnEnterAnimation, slideOutDownOnLeaveAnimation, slideOutLeftOnLeaveAnimation, slideOutRightOnLeaveAnimation, zoomInLeftOnEnterAnimation, zoomInOnEnterAnimation, zoomInRightOnEnterAnimation, zoomOutDownOnLeaveAnimation, zoomOutLeftOnLeaveAnimation, zoomOutOnLeaveAnimation, zoomOutRightOnLeaveAnimation } from '../../animations';

@Component({
    selector: 'marker',
    templateUrl: './marker.component.html',
    animations: [
        zoomInOnEnterAnimation({ anchor: 'zoomIn', duration: 300 }),
        slideOutDownOnLeaveAnimation({ anchor: 'zoomOut', duration: 300 }),
    ]
})

export class MarkerComponent {
    @Input() value: number;
    @Input() selected: number;
}

