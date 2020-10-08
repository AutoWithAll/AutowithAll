import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerdashComponent } from './sellerdash.component';

describe('SellerdashComponent', () => {
  let component: SellerdashComponent;
  let fixture: ComponentFixture<SellerdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
