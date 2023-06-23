import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyEarniuComponent } from './yearly-earniu.component';

describe('YearlyEarniuComponent', () => {
  let component: YearlyEarniuComponent;
  let fixture: ComponentFixture<YearlyEarniuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearlyEarniuComponent]
    });
    fixture = TestBed.createComponent(YearlyEarniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
