import { SelectControl } from 'app/models/form/controls/select-control';
import { IFormUpdater, IFormUpdates } from 'app/models/interfaces/form-updater';
import { FormGroup } from '@angular/forms';

export class SiteLocationControl extends SelectControl<number> {
  public static Codes = [
    {key: 0, value: 'Unknown'},
    {key: 1, value: 'Not at intersection/railroad crossing/bridge'},
    {key: 2, value: 'At intersection'},
    {key: 3, value: 'Influenced by intersection'},
    {key: 4, value: 'Driveway access'},
    {key: 5, value: 'Railroad'},
    {key: 6, value: 'Bridge'},
    {key: 7, value: 'Entrance ramp'},
    {key: 8, value: 'Exit ramp'},
    {key: 9, value: 'Private parking lot'},
    {key: 10, value: 'Public parking lot'},
    {key: 11, value: 'Private property'},
    {key: 12, value: 'Toll booth'},
    {key: 13, value: 'Public bus stop zone'},
    {key: 77, value: 'All other (explained in narrative)'}
  ];
  key             = 'siteLocation';
  label           = 'Site Location';
  options         = SiteLocationControl.Codes;
  keyValueOptions = true;

  public updateForm(newValue: number, form: FormGroup): void {
    const updates = new IFormUpdates();

    // If in a parking lot...
    if ([9, 10].includes(newValue)) {
      updates.sideOfRoad = 'P';
      updates.roadwaySystemId = 9;
    }

    form.patchValue(updates);
  }
}
