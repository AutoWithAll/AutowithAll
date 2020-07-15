import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseViewAdsComponent } from './lease-view-ads.component';

describe('LeaseViewAdsComponent', () => {
  let component: LeaseViewAdsComponent;
  let fixture: ComponentFixture<LeaseViewAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseViewAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseViewAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
