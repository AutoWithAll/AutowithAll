import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosepackageComponent } from './choosepackage.component';

describe('ChoosepackageComponent', () => {
  let component: ChoosepackageComponent;
  let fixture: ComponentFixture<ChoosepackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosepackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosepackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
