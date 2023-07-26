import { TestBed, inject } from '@angular/core/testing';

import { AdminYearService } from './admin-year.service';

describe('AdminYearService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminYearService]
    });
  });

  it('should be created', inject([AdminYearService], (service: AdminYearService) => {
    expect(service).toBeTruthy();
  }));
});
