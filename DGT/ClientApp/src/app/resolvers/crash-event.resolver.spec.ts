import { TestBed } from '@angular/core/testing';

import { CrashEventResolver } from './crash-event.resolver';

describe('CrashEventResolver', () => {
  let resolver: CrashEventResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CrashEventResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
