import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDomenComponent } from './admin-domen.component';

describe('AdminDomenComponent', () => {
  let component: AdminDomenComponent;
  let fixture: ComponentFixture<AdminDomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
