import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IcpsEditComponent} from "./icps-edit.component";

const routes: Routes = [
  {
    path:'',
    component:IcpsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IcpsEditRoutingModule { }
