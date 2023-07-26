import { TestBed, inject } from '@angular/core/testing';

import { MunicipalityService } from './municipality.service';

describe('MunicipalityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MunicipalityService]
    });
  });

  it('should be created', inject([MunicipalityService], (service: MunicipalityService) => {
    expect(service).toBeTruthy();
  }));
});
