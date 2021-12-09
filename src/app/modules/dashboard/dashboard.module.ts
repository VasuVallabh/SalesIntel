import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CounterCardDashboardComponent } from './components/counter-card-dashboard/counter-card-dashboard.component';
import { BlogLinksDashboardComponent } from './components/blog-links-dashboard/blog-links-dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [
    DashboardComponent,
    CounterCardDashboardComponent,
    BlogLinksDashboardComponent
  ],
  providers: [],
})
export class DashboardModule { }
