import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RodComponent} from "./rod.component";

const routes: Routes = [
  {
    path: '',
    component: RodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RodRoutingModule { }
