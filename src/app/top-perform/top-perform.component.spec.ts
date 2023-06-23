import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPerformComponent } from './top-perform.component';

describe('TopPerformComponent', () => {
  let component: TopPerformComponent;
  let fixture: ComponentFixture<TopPerformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopPerformComponent]
    });
    fixture = TestBed.createComponent(TopPerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
