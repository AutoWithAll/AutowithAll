import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrivacypolicyComponent } from './home-privacypolicy.component';

describe('HomePrivacypolicyComponent', () => {
  let component: HomePrivacypolicyComponent;
  let fixture: ComponentFixture<HomePrivacypolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePrivacypolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePrivacypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
