import { TestBed } from '@angular/core/testing';

import { EditorQueueService } from './editor-queue.service';

describe('WorkQueueService', () => {
  let service: EditorQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
