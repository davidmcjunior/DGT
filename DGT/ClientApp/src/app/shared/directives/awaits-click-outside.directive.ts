import { Directive, EventEmitter, Output, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[awaitsClickOutside]'
})

export class AwaitsClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<any>();
  @Input('awaitsClickOutside') className: string;
  isInitialized = false;

  @HostListener('window:click', ['$event'])
  handleClickEvent(event: MouseEvent | any) {
    if (!this.isInitialized) {
      this.isInitialized = true;
      return;
    }

    let classList: string[] = [];
    let pathes = event['path'].map((p: any) => p['classList']);
    pathes.forEach((classes: string[]) => {
      if (classes && classes.length > 0) {
        classes.forEach(className => {
          classList.push(className);
        });
      }
    });
    let hasClass = classList.filter(className => className === this.className).length > 0;
    if (!hasClass) {
      this.clickOutside.emit();
    }
  }
}
