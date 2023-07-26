import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryButtonPageComponent } from './dictionary-button-page.component';

describe('DictionaryButtonPageComponent', () => {
  let component: DictionaryButtonPageComponent;
  let fixture: ComponentFixture<DictionaryButtonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryButtonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
