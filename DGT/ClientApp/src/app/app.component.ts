import { Component } from '@angular/core';
import { TooltipSettings } from '@progress/kendo-angular-tooltip';
import { TOOLTIP_SETTINGS } from './models/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [{
    provide: TooltipSettings,
    useFactory: TOOLTIP_SETTINGS
}]
})
export class AppComponent {
  title = 'dgt-frontend';
}
