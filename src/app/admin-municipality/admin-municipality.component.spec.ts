import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMunicipalityComponent } from './admin-municipality.component';

describe('AdminMunicipalityComponent', () => {
  let component: AdminMunicipalityComponent;
  let fixture: ComponentFixture<AdminMunicipalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMunicipalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
