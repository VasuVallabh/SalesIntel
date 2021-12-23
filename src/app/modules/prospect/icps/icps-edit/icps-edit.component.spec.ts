import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcpsEditComponent } from './icps-edit.component';

describe('IcpsEditComponent', () => {
  let component: IcpsEditComponent;
  let fixture: ComponentFixture<IcpsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcpsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcpsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
