import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyAttributesComponent } from './readonly-attributes.component';

describe('AttributesComponent', () => {
  let component: ReadonlyAttributesComponent;
  let fixture: ComponentFixture<ReadonlyAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadonlyAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
