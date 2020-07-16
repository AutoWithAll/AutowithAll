import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasePlanComponent } from './lease-plan.component';

describe('LeasePlanComponent', () => {
  let component: LeasePlanComponent;
  let fixture: ComponentFixture<LeasePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
