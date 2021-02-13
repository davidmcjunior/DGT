import { Component, Output, EventEmitter, Input } from '@angular/core';
@Component({ selector: 's4-icon', templateUrl: './icon-button.component.html' })

export class IconButtonComponent {
  @Input() icon: string;
  @Input() cssClass: string;
  @Input() faStyle?: 'fa' | 'fal' | 'far' | 'fas' | 'fad' = 'fal';
  @Input() customIcon = false;
  @Output() trigger: EventEmitter<any> = new EventEmitter<any>();

  get buttonClass(): string {
    return `s4-btn ${this.cssClass}`;
  }
  get iconClass(): string {
    return `${this.faStyle} fa-${this.icon} `;
  }

  onTrigger(): void {
    if (this.trigger) {
      this.trigger.emit();
    }
  }
}
