import { Component, OnInit, OnDestroy } from '@angular/core';
import { tadaAnimation } from '../../animations';
import { randomItem } from '../../utilities';

@Component({
  selector: 'under-construction',
  templateUrl: './under-construction.component.html',
  animations: [tadaAnimation({ anchor: 'tada' })],
})

export class UnderConstructionComponent implements OnInit, OnDestroy {
  icons: string[] = ['construction', 'wrench', 'user-hard-hat', 'shovel', 'tools', 'screwdriver', 'ruler', 'pencil-ruler', 'digging', 'forklift', 'hammer', 'drafting-compass'];
  styles: string[] = ['fad', 'fal', 'fas', 'far'];

  isReady = false;
  interval: any;
  iconStyle = randomItem(this.styles);
  iconName = randomItem(this.icons);
  ngOnInit(): void {
    this.interval = setInterval(() => this.isReady = true, 10000);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
