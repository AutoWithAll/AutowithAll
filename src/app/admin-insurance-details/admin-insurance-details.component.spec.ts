import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsuranceDetailsComponent } from './admin-insurance-details.component';

describe('AdminInsuranceDetailsComponent', () => {
  let component: AdminInsuranceDetailsComponent;
  let fixture: ComponentFixture<AdminInsuranceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInsuranceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInsuranceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
