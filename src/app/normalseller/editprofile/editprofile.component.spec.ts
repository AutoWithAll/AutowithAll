import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerEditprofileComponent } from './editprofile.component';

describe('SellerEditprofileComponent', () => {
  let component: SellerEditprofileComponent;
  let fixture: ComponentFixture<SellerEditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerEditprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
