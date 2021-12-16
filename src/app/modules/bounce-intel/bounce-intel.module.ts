import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BounceIntelComponent } from "./bounce-intel.component";
import { BounceIntelRoutingModule } from './bounce-intel-routing.module';


@NgModule({
  declarations: [BounceIntelComponent],
  imports: [
    CommonModule,
    BounceIntelRoutingModule
  ]
})
export class BounceIntelModule { }
