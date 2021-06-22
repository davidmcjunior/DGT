import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolAssignmentDialogComponent } from './pool-assignment-dialog.component';

describe('PoolAssignmentDialogComponent', () => {
  let component: PoolAssignmentDialogComponent;
  let fixture: ComponentFixture<PoolAssignmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolAssignmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolAssignmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
