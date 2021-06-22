import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashEventRecordComponent } from './crash-event-record.component';

describe('CrashEventRecordComponent', () => {
  let component: CrashEventRecordComponent;
  let fixture: ComponentFixture<CrashEventRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrashEventRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashEventRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the value in the control', () => {
    const input = fixture.nativeElement.querySelector('input');

    expect(input.value).toBe('Blue');
  });
});
