import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubdomenComponent } from './admin-subdomen.component';

describe('AdminSubdomenComponent', () => {
  let component: AdminSubdomenComponent;
  let fixture: ComponentFixture<AdminSubdomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSubdomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubdomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
