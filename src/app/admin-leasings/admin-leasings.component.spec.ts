import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeasingsComponent } from './admin-leasings.component';

describe('AdminLeasingsComponent', () => {
  let component: AdminLeasingsComponent;
  let fixture: ComponentFixture<AdminLeasingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLeasingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLeasingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
