import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopwidgetComponent } from './topwidget.component';

describe('TopwidgetComponent', () => {
  let component: TopwidgetComponent;
  let fixture: ComponentFixture<TopwidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopwidgetComponent]
    });
    fixture = TestBed.createComponent(TopwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
