import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcpsListComponent } from './icps-list.component';

describe('IcpsListComponent', () => {
  let component: IcpsListComponent;
  let fixture: ComponentFixture<IcpsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcpsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcpsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
