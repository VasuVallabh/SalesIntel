import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RodRoutingModule } from './rod-routing.module';
import { RodComponent } from './rod.component'

@NgModule({
  declarations: [RodComponent],
  imports: [
    CommonModule,
    RodRoutingModule
  ]
})
export class RodModule { }
