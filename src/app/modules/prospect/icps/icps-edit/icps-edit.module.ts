import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IcpsEditRoutingModule } from './icps-edit-routing.module';
import { IcpsEditComponent } from './icps-edit.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { EditGradeComponent } from './edit-grade/edit-grade.component';

@NgModule({
  declarations: [
    IcpsEditComponent,
    EditGradeComponent
  ],
  imports: [
    CommonModule,
    IcpsEditRoutingModule,
    FontAwesomeModule
  ]
})
export class IcpsEditModule { }
