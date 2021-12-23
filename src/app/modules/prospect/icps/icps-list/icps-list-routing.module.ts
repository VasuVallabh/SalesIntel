import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IcpsListComponent} from "./icps-list.component";

const routes: Routes = [
  {
    path:'',
    component:IcpsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IcpsListRoutingModule { }
