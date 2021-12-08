import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCardDashboardComponent } from './counter-card-dashboard.component';

describe('CounterCardDashboardComponent', () => {
  let component: CounterCardDashboardComponent;
  let fixture: ComponentFixture<CounterCardDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterCardDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
