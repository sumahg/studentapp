import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApp2Component } from './student-app2.component';

describe('StudentApp2Component', () => {
  let component: StudentApp2Component;
  let fixture: ComponentFixture<StudentApp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentApp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentApp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
