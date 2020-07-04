import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasingDashboardComponent } from './leasing-dashboard.component';

describe('LeasingDashboardComponent', () => {
  let component: LeasingDashboardComponent;
  let fixture: ComponentFixture<LeasingDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasingDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
