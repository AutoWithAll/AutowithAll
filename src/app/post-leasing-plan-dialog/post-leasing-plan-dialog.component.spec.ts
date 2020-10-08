import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLeasingPlanDialogComponent } from './post-leasing-plan-dialog.component';

describe('PostLeasingPlanDialogComponent', () => {
  let component: PostLeasingPlanDialogComponent;
  let fixture: ComponentFixture<PostLeasingPlanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLeasingPlanDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLeasingPlanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
