import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'prospect', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'prospect', loadChildren: () => import('./modules/prospect/prospect.module').then(m => m.ProspectModule) },
  { path: 'rod', loadChildren: () => import('./modules/rod/rod.module').then(m => m.RodModule) },
  { path: 'inbox-intel', loadChildren: () => import('./modules/inbox-intel/inbox-intel.module').then(m => m.InboxIntelModule) },
  { path: 'bounce-intel/tasks', loadChildren: () => import('./modules/bounce-intel/tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'bounce-intel/new', loadChildren: () => import('./modules/bounce-intel/new/new.module').then(m => m.NewModule) },
  { path: 'bounce-intel/report', loadChildren: () => import('./modules/bounce-intel/report/report.module').then(m => m.ReportModule) },
  { path: 'market-analysis', loadChildren: () => import('./modules/market-analysis/market-analysis.module').then(m => m.MarketAnalysisModule) },
  { path: 'intelligence', loadChildren: () => import('./modules/Intelligence/Intelligence.module').then(m => m.IntelligenceModule) },
  { path: '**', redirectTo: 'prospect' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})

export class AppRoutingModule { }
