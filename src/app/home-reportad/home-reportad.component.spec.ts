import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReportadComponent } from './home-reportad.component';

describe('HomeReportadComponent', () => {
  let component: HomeReportadComponent;
  let fixture: ComponentFixture<HomeReportadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeReportadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeReportadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
