import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubdomenListComponent } from './admin-subdomen-list.component';

describe('AdminSubdomenListComponent', () => {
  let component: AdminSubdomenListComponent;
  let fixture: ComponentFixture<AdminSubdomenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSubdomenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubdomenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
