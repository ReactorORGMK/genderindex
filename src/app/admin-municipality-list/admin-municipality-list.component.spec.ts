import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMunicipalityListComponent } from './admin-municipality-list.component';

describe('AdminMunicipalityListComponent', () => {
  let component: AdminMunicipalityListComponent;
  let fixture: ComponentFixture<AdminMunicipalityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMunicipalityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMunicipalityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
