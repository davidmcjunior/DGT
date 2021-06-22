import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveUpDialogComponent } from './give-up-dialog.component';

describe('GiveUpDialogComponent', () => {
  let component: GiveUpDialogComponent;
  let fixture: ComponentFixture<GiveUpDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveUpDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveUpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
