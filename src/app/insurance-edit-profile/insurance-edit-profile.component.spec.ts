import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceEditProfileComponent } from './insurance-edit-profile.component';

describe('InsuranceEditProfileComponent', () => {
  let component: InsuranceEditProfileComponent;
  let fixture: ComponentFixture<InsuranceEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
