import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElsMunicipalityListComponent } from './admin-els-municipality-list.component';

describe('AdminElsMunicipalityListComponent', () => {
  let component: AdminElsMunicipalityListComponent;
  let fixture: ComponentFixture<AdminElsMunicipalityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminElsMunicipalityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminElsMunicipalityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
