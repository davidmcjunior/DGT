import { Injectable } from '@angular/core';
import { FormControlFactory } from 'app/models/form/form-control-factory';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldControlBase } from 'app/models/form/controls/field-control-base';


@Injectable({
  providedIn: 'root'
})
export class FormControlCreationService {
  public constructor(private fieldFactory: FormControlFactory) { }

  public getControls(controls: {key: string, value: any}[]): FormGroup {
    const group: any = [];
    let i = 0;

    controls.forEach(control => {
      const controlObj = this.fieldFactory.getControl(control.key, control.value);
      controlObj.order = i++;
      group[control.key] = controlObj;
    });

    // console.log(group);
    //
    // // @ts-ignore
    // group.sort((a, b) => a.order - b.order);
    //
    // console.log(group);

    const form = new FormGroup(group);
    return form;
  }

}
