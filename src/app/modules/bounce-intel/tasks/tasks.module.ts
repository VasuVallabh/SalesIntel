import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {DataTableComponent} from "../data-table/data-table.component";


@NgModule({
  declarations: [
    TasksComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FontAwesomeModule
  ]
})
export class TasksModule { }
