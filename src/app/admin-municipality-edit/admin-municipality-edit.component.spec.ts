import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMunicipalityEditComponent } from './admin-municipality-edit.component';

describe('AdminMunicipalityEditComponent', () => {
  let component: AdminMunicipalityEditComponent;
  let fixture: ComponentFixture<AdminMunicipalityEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMunicipalityEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMunicipalityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
