import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompaniesComponent} from "./companies.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {
    path: '',
    component: CompaniesComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
