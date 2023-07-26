import { TestBed, inject } from '@angular/core/testing';

import { AdminRegionService } from './admin-region.service';

describe('AdminRegionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminRegionService]
    });
  });

  it('should be created', inject([AdminRegionService], (service: AdminRegionService) => {
    expect(service).toBeTruthy();
  }));
});
