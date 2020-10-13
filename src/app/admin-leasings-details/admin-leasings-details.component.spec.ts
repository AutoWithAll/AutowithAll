import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeasingsDetailsComponent } from './admin-leasings-details.component';

describe('AdminLeasingsDetailsComponent', () => {
  let component: AdminLeasingsDetailsComponent;
  let fixture: ComponentFixture<AdminLeasingsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLeasingsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLeasingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
