import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProspectComponent } from './prospect.component';
import { ProspectRoutingModule } from './prospect-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProspectComponent
  ],
  imports: [
    CommonModule,
    ProspectRoutingModule,
    RouterModule
  ],
  exports: [
    ProspectComponent
  ]
})
export class ProspectModule { }
