import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubdomenEditComponent } from './admin-subdomen-edit.component';

describe('AdminSubdomenEditComponent', () => {
  let component: AdminSubdomenEditComponent;
  let fixture: ComponentFixture<AdminSubdomenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSubdomenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubdomenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
