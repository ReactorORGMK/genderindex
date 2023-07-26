import { TestBed, inject } from '@angular/core/testing';

import { AdminDomenService } from './admin-domen.service';

describe('AdminDomenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminDomenService]
    });
  });

  it('should be created', inject([AdminDomenService], (service: AdminDomenService) => {
    expect(service).toBeTruthy();
  }));
});
