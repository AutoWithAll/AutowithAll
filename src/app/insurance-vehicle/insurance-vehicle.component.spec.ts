import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceVehicleComponent } from './insurance-vehicle.component';

describe('InsuranceVehicleComponent', () => {
  let component: InsuranceVehicleComponent;
  let fixture: ComponentFixture<InsuranceVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
