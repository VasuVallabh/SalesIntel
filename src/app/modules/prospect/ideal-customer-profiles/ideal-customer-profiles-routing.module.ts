import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IdealCustomerProfilesComponent} from "./ideal-customer-profiles.component";

const routes: Routes = [
  {
    path: '',
    component: IdealCustomerProfilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdealCustomerProfilesRoutingModule { }
