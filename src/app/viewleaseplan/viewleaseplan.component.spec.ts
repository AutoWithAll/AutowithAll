import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleaseplanComponent } from './viewleaseplan.component';

describe('ViewleaseplanComponent', () => {
  let component: ViewleaseplanComponent;
  let fixture: ComponentFixture<ViewleaseplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewleaseplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewleaseplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
