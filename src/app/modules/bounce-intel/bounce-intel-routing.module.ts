import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      {
        path: '',
        loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
      },
      {
        path: 'new',
        loadChildren: () => import('./new/new.module').then(m => m.NewModule)
      },
      {
        path: 'report',
        loadChildren: () => import('./report/report.module').then(m => m.ReportModule)
      },
      {
        path: '**',
        redirectTo: 'tasks'
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BounceIntelRoutingModule { }
