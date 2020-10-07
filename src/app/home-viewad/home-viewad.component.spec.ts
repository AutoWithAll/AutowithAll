import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewadComponent } from './home-viewad.component';

describe('HomeViewadComponent', () => {
  let component: HomeViewadComponent;
  let fixture: ComponentFixture<HomeViewadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeViewadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
