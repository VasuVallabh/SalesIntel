import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {DataTableComponent} from "./data-table/data-table.component";


@NgModule({
  declarations: [
    CompaniesComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    FontAwesomeModule,
  ]
})
export class CompaniesModule { }
