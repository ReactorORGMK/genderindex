import { TestBed, inject } from '@angular/core/testing';

import { AdminMunicipalityService } from './admin-municipality.service';

describe('AdminMunicipalityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminMunicipalityService]
    });
  });

  it('should be created', inject([AdminMunicipalityService], (service: AdminMunicipalityService) => {
    expect(service).toBeTruthy();
  }));
});
