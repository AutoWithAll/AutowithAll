import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasingProfileComponent } from './leasing-profile.component';

describe('LeasingProfileComponent', () => {
  let component: LeasingProfileComponent;
  let fixture: ComponentFixture<LeasingProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasingProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
