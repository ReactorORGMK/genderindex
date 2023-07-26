import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminYearEditComponent } from './admin-year-edit.component';

describe('AdminYearEditComponent', () => {
  let component: AdminYearEditComponent;
  let fixture: ComponentFixture<AdminYearEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminYearEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminYearEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
