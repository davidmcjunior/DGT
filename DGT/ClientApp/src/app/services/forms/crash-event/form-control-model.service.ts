import { Injectable } from '@angular/core';
import { FormControlFactory } from 'app/models/form/form-control-factory';
import { FieldControlBase } from 'app/models/form/controls/field-control-base';


@Injectable({
  providedIn: 'root'
})
export class FormControlModelService {
  public constructor(private fieldFactory: FormControlFactory) { }

  public getControl(key: string): FieldControlBase<any> {
    return this.fieldFactory.getControl(key);
  }

  public getFieldKeys(): string[] {
    return this.fieldFactory.getFieldKeys();
  }

}
