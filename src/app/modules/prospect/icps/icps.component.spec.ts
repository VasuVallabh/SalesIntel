import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcpsComponent } from './icps.component';

describe('IdealCustomerProfilesComponent', () => {
  let component: IcpsComponent;
  let fixture: ComponentFixture<IcpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
