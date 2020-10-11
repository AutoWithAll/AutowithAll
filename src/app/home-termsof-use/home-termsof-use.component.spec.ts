import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTermsofUseComponent } from './home-termsof-use.component';

describe('HomeTermsofUseComponent', () => {
  let component: HomeTermsofUseComponent;
  let fixture: ComponentFixture<HomeTermsofUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTermsofUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTermsofUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
