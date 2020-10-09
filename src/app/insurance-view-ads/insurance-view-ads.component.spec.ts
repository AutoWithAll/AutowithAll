import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceViewAdsComponent } from './insurance-view-ads.component';

describe('InsuranceViewAdsComponent', () => {
  let component: InsuranceViewAdsComponent;
  let fixture: ComponentFixture<InsuranceViewAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceViewAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceViewAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
