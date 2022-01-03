import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { DataTableComponent } from './data-table/data-table.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../../../shared/shared.module'

@NgModule({
  declarations: [
    CompaniesComponent,
    DataTableComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    CompaniesComponent
  ]
})
export class CompaniesModule { }
