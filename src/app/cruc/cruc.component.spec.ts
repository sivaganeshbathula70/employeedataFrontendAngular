import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrucComponent } from './cruc.component';

describe('CrucComponent', () => {
  let component: CrucComponent;
  let fixture: ComponentFixture<CrucComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrucComponent]
    });
    fixture = TestBed.createComponent(CrucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
