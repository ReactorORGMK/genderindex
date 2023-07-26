import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegionListComponent } from './admin-region-list.component';

describe('AdminRegionListComponent', () => {
  let component: AdminRegionListComponent;
  let fixture: ComponentFixture<AdminRegionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
