import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseNavbarComponent } from './lease-navbar.component';

describe('LeaseNavbarComponent', () => {
  let component: LeaseNavbarComponent;
  let fixture: ComponentFixture<LeaseNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
