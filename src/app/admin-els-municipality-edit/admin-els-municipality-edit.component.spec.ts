import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElsMunicipalityEditComponent } from './admin-els-municipality-edit.component';

describe('AdminElsMunicipalityEditComponent', () => {
  let component: AdminElsMunicipalityEditComponent;
  let fixture: ComponentFixture<AdminElsMunicipalityEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminElsMunicipalityEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminElsMunicipalityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
