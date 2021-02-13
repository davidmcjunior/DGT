import { Component, Input } from '@angular/core';
import { makeProvider, AbstractValueAccessor } from 'src/app/shared/models';


@Component({
  selector: 's4-text-input',
  providers: [makeProvider(TextInputComponent)],
  templateUrl: './text-input.component.html'
})

export class TextInputComponent extends AbstractValueAccessor {
  @Input() title: string;
  @Input() filterName: string;
  @Input() placeholderText: string;
  private _text: string;

  constructor() {
    super();
  }
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this.selectedItemValue = this._text = value;
  }

  set selectedItemValue(value: string) {
    // `this.value` maps to `ngModel` and is provided by the `AbstractValueAccessor` base class.
    if (!value) {
      this.value = '';
    }

    this.value = value;
  }

  clear = () => this.text = '';

}
