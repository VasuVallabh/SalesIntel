import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarketAnalysisComponent} from "./market-analysis.component";

const routes: Routes = [
  {
    path:'',
    component: MarketAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketAnalysisRoutingModule { }
