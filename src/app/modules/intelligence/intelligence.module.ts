import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntelligenceRoutingModule } from './intelligence-routing.module';
import { IntelligenceComponent } from './intelligence.component';


@NgModule({
  declarations: [
    IntelligenceComponent
  ],
  imports: [
    CommonModule,
    IntelligenceRoutingModule
  ]
})
export class IntelligenceModule { }
