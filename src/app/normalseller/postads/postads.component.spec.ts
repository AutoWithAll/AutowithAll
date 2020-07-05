import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPostadsComponent } from './postads.component';

describe('SellerPostadsComponent', () => {
  let component: SellerPostadsComponent;
  let fixture: ComponentFixture<SellerPostadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerPostadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerPostadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
