import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseSidebarComponent } from './lease-sidebar.component';

describe('LeaseSidebarComponent', () => {
  let component: LeaseSidebarComponent;
  let fixture: ComponentFixture<LeaseSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
