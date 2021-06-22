import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolQueryComponent } from './pool-query.component';

describe('PoolQueryComponent', () => {
  let component: PoolQueryComponent;
  let fixture: ComponentFixture<PoolQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
