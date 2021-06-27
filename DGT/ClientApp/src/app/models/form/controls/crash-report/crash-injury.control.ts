import { SelectControl } from 'app/models/form/controls/select-control';
import { IFormUpdater, IFormUpdates } from 'app/models/interfaces/form-updater';
import { FormGroup } from '@angular/forms';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class CrashInjuryControl extends SelectControl<number> {

  public static Codes = [
    {key: 1, value: 'None'},
    {key: 2, value: 'Possible'},
    {key: 3, value: 'Non-incapacitating'},
    {key: 4, value: 'Incapacitating'},
    {key: 5, value: 'Fatal (within 30 days)'},
    {key: 6, value: 'Non-Traffic Fatality'}
  ];
  key             = 'crashInjury';
  label           = 'Crash Injury';
  options         = CrashInjuryControl.Codes;
  keyValueOptions = true;

  public updateForm = (newValue: number, form: FormGroup): void => {
    const updates = new IFormUpdates();

    // If in a parking lot...
    if ([5].includes(newValue)) {
      updates.comments = '/// Injury severity changed.';
    }

    form.patchValue(updates);
  }

}
