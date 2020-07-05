import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostadsComponent } from './postads.component';

describe('PostadsComponent', () => {
  let component: PostadsComponent;
  let fixture: ComponentFixture<PostadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
