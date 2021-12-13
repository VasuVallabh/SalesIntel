import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProspectComponent} from "./prospect.component";

const routes: Routes = [
  {
    path: '',
    component: ProspectComponent,
    children: [
      {
        path: 'companies',
        loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
      },
      {
        path: '',
        redirectTo: 'companies',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectRoutingModule { }
