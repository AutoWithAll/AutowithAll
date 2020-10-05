import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditagentadsComponent } from './editagentads.component';

describe('EditagentadsComponent', () => {
  let component: EditagentadsComponent;
  let fixture: ComponentFixture<EditagentadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditagentadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditagentadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
