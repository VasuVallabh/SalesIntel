import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'list',
    loadChildren: () => import('./icps-list/icps-list.module').then(m => m.IcpsListModule)
  },
  {
    path:'edit',
    loadChildren: () => import('./icps-edit/icps-edit.module').then(m => m.IcpsEditModule)
  },
  {
    path:'**',
    redirectTo:'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IcpsRoutingModule { }
