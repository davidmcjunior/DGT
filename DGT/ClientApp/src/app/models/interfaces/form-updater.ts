import { FormGroup } from '@angular/forms';

/**
 * A field control implements this interface in order to respond to a field
 * control's 'update' event by modifying the form state if needed.
 */
export interface IFormUpdater {

  updateForm(newValue: any, form: FormGroup): void;
}

/**
 * A key/value object that will contain fieldName: fieldValue pairs that
 * can be passed into FormGroup.patchValue().
 */
export class IFormUpdates {
  [key: string]: any
}
