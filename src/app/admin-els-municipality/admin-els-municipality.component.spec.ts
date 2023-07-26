import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElsMunicipalityComponent } from './admin-els-municipality.component';

describe('AdminElsMunicipalityComponent', () => {
  let component: AdminElsMunicipalityComponent;
  let fixture: ComponentFixture<AdminElsMunicipalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminElsMunicipalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminElsMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
