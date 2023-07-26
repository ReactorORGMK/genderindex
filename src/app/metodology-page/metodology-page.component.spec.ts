import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodologyPageComponent } from './metodology-page.component';

describe('MetodologyPageComponent', () => {
  let component: MetodologyPageComponent;
  let fixture: ComponentFixture<MetodologyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodologyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodologyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
