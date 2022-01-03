import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTabsComponent } from './shared-tabs.component';

describe('SharedTabsComponent', () => {
  let component: SharedTabsComponent;
  let fixture: ComponentFixture<SharedTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
