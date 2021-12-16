import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketAnalysisRoutingModule } from './market-analysis-routing.module';
import { MarketAnalysisComponent } from './market-analysis.component';


@NgModule({
  declarations: [
    MarketAnalysisComponent
  ],
  imports: [
    CommonModule,
    MarketAnalysisRoutingModule
  ]
})
export class MarketAnalysisModule { }
