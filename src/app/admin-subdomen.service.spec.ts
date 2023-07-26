import { TestBed, inject } from '@angular/core/testing';

import { AdminSubdomenService } from './admin-subdomen.service';

describe('AdminSubdomenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminSubdomenService]
    });
  });

  it('should be created', inject([AdminSubdomenService], (service: AdminSubdomenService) => {
    expect(service).toBeTruthy();
  }));
});
