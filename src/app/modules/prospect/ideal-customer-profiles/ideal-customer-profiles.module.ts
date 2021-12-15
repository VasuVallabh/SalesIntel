import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IdealCustomerProfilesRoutingModule} from "./ideal-customer-profiles-routing.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {IdealCustomerProfilesComponent} from "./ideal-customer-profiles.component";
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [IdealCustomerProfilesComponent, DataTableComponent],
  imports: [
    CommonModule,
    IdealCustomerProfilesRoutingModule,
    FontAwesomeModule
  ]
})
export class IdealCustomerProfilesModule { }
