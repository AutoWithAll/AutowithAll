import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinsuranceplanComponent } from './viewinsuranceplan.component';

describe('ViewinsuranceplanComponent', () => {
  let component: ViewinsuranceplanComponent;
  let fixture: ComponentFixture<ViewinsuranceplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewinsuranceplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinsuranceplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
