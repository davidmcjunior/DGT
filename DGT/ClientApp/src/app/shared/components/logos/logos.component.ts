import { Component, Input } from '@angular/core';
import { LightOrDark } from '../../constants';

@Component({
  selector: 's4-logo',
  templateUrl: './logos.component.html'
})

export class LogosComponent {
  @Input() color: LightOrDark = 'dark';
  @Input() logoStyle: 'icon' | 'banner' = 'icon';
  @Input() width = '100%';
  @Input() height = '100%';
}
