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
        path: 'lists',
        loadChildren: () => import('./lists/lists.module').then(m => m.ListsModule)
      },
      {
        path: 'saved-searches',
        loadChildren: () => import('./saved-searches/saved-searches.module').then(m => m.SavedSearchesModule)
      },
      {
        path: 'icps',
        loadChildren: () => import('./icps/icps.module').then(m => m.IcpsModule)
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
