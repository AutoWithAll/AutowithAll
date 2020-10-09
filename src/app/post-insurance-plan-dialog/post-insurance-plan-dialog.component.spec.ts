import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInsurancePlanDialogComponent } from './post-insurance-plan-dialog.component';

describe('PostInsurancePlanDialogComponent', () => {
  let component: PostInsurancePlanDialogComponent;
  let fixture: ComponentFixture<PostInsurancePlanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInsurancePlanDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInsurancePlanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
