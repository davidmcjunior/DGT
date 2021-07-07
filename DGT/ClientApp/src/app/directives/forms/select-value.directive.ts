import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[dgtSelectValue]'
})
export class SelectValueDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
