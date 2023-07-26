import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalityCompareComponent } from './municipality-compare.component';

describe('MunicipalityCompareComponent', () => {
  let component: MunicipalityCompareComponent;
  let fixture: ComponentFixture<MunicipalityCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalityCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalityCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
