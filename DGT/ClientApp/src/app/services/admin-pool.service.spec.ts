import { TestBed } from '@angular/core/testing';

import { AdminPoolService } from './admin-pool.service';

describe('AdminPoolService', () => {
  let service: AdminPoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
