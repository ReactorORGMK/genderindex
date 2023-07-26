import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDomenEditComponent } from './admin-domen-edit.component';

describe('AdminDomenEditComponent', () => {
  let component: AdminDomenEditComponent;
  let fixture: ComponentFixture<AdminDomenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDomenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDomenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
