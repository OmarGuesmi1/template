import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardbackComponent } from './dashboardback.component';

describe('DashboardbackComponent', () => {
  let component: DashboardbackComponent;
  let fixture: ComponentFixture<DashboardbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardbackComponent]
    });
    fixture = TestBed.createComponent(DashboardbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
