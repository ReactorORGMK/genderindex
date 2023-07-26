import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminYearListComponent } from './admin-year-list.component';

describe('AdminYearListComponent', () => {
  let component: AdminYearListComponent;
  let fixture: ComponentFixture<AdminYearListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminYearListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminYearListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
