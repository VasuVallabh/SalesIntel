import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import {ChartModule} from "angular2-chartjs";

@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    FontAwesomeModule,
    ChartModule
  ]
})
export class ReportModule { }
