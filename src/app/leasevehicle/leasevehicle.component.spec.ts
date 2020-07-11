import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasevehicleComponent } from './leasevehicle.component';

describe('LeasevehicleComponent', () => {
  let component: LeasevehicleComponent;
  let fixture: ComponentFixture<LeasevehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasevehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
