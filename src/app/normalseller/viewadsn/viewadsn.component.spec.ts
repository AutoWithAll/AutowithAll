import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerViewadsComponent } from './viewadsn.component';

describe('SellerViewadsComponent', () => {
  let component: SellerViewadsComponent;
  let fixture: ComponentFixture<SellerViewadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerViewadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerViewadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
