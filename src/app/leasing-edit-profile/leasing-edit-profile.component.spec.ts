import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasingEditProfileComponent } from './leasing-edit-profile.component';

describe('LeasingEditProfileComponent', () => {
  let component: LeasingEditProfileComponent;
  let fixture: ComponentFixture<LeasingEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasingEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasingEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
