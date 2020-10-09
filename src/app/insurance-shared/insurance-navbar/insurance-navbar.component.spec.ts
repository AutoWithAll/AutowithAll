import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceNavbarComponent } from './insurance-navbar.component';

describe('InsuranceNavbarComponent', () => {
  let component: InsuranceNavbarComponent;
  let fixture: ComponentFixture<InsuranceNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
