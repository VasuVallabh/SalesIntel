import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealCustomerProfilesComponent } from './ideal-customer-profiles.component';

describe('IdealCustomerProfilesComponent', () => {
  let component: IdealCustomerProfilesComponent;
  let fixture: ComponentFixture<IdealCustomerProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdealCustomerProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdealCustomerProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
