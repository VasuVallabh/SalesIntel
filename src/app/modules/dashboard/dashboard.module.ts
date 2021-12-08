import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CounterCardDashboardComponent } from './components/counter-card-dashboard/counter-card-dashboard.component';
import { BlogLinksDashboardComponent } from './components/blog-links-dashboard/blog-links-dashboard.component';
import { CountToModule } from 'angular-count-to';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CountToModule
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
