import { TestBed, inject } from '@angular/core/testing';

import { AdminElsMunicipalityService } from './admin-els-municipality.service';

describe('AdminElsMunicipalityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminElsMunicipalityService]
    });
  });

  it('should be created', inject([AdminElsMunicipalityService], (service: AdminElsMunicipalityService) => {
    expect(service).toBeTruthy();
  }));
});
