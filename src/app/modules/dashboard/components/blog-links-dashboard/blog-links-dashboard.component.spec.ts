import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLinksDashboardComponent } from './blog-links-dashboard.component';

describe('BlogLinksDashboardComponent', () => {
  let component: BlogLinksDashboardComponent;
  let fixture: ComponentFixture<BlogLinksDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogLinksDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLinksDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
