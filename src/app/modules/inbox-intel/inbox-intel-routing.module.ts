import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InboxIntelComponent} from "./inbox-intel.component";

const routes: Routes = [
  {
    path: '',
    component: InboxIntelComponent,
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
        redirectTo: 'contacts',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxIntelRoutingModule { }
