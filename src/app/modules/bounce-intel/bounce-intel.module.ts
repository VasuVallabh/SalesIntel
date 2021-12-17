import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BounceIntelComponent } from "./bounce-intel.component";
import { BounceIntelRoutingModule } from './bounce-intel-routing.module';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {DataTableComponent} from "./data-table/data-table.component";

@NgModule({
  declarations: [BounceIntelComponent, DataTableComponent],
  imports: [
    CommonModule,
    BounceIntelRoutingModule,
    FontAwesomeModule
  ]
})
export class BounceIntelModule { }
