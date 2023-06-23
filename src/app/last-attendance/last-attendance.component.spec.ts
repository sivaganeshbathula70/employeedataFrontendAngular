import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastAttendanceComponent } from './last-attendance.component';

describe('LastAttendanceComponent', () => {
  let component: LastAttendanceComponent;
  let fixture: ComponentFixture<LastAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastAttendanceComponent]
    });
    fixture = TestBed.createComponent(LastAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
