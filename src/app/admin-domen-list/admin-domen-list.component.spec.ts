import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDomenListComponent } from './admin-domen-list.component';

describe('AdminDomenListComponent', () => {
  let component: AdminDomenListComponent;
  let fixture: ComponentFixture<AdminDomenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDomenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDomenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
