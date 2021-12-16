import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BounceIntelComponent } from './bounce-intel.component';

describe('BounceIntelComponent', () => {
  let component: BounceIntelComponent;
  let fixture: ComponentFixture<BounceIntelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BounceIntelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BounceIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
