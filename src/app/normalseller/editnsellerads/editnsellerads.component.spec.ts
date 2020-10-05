import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnselleradsComponent } from './editnsellerads.component';

describe('EditnselleradsComponent', () => {
  let component: EditnselleradsComponent;
  let fixture: ComponentFixture<EditnselleradsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditnselleradsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnselleradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
