import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BounceIntelComponent} from "./bounce-intel.component";

const routes: Routes = [
  {
    path:'',
    component:BounceIntelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BounceIntelRoutingModule { }
