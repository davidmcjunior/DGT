import { IFormUpdater, IFormUpdates } from 'app/models/interfaces/form-updater';
import { FormGroup } from '@angular/forms';
import { SourceMapLocation } from '@angular/compiler-cli/src/ngtsc/translator';

export class MapControl implements IFormUpdater {
  public x: number;
  public y: number;

  public updateForm(newValue: {x: number, y: number}, form: FormGroup): void {
    const updates = new IFormUpdates();

    form.patchValue(updates);
  }

}
