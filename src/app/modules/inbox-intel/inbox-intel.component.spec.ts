import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxIntelComponent } from './inbox-intel.component';

describe('InboxIntelComponent', () => {
  let component: InboxIntelComponent;
  let fixture: ComponentFixture<InboxIntelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxIntelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
