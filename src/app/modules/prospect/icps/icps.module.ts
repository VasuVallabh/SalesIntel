import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IcpsRoutingModule} from "./icps-routing.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {IcpsComponent} from "./icps.component";
import {IcpsListComponent} from "./icps-list/icps-list.component";

@NgModule({
  declarations: [IcpsComponent, IcpsListComponent],
  imports: [
    CommonModule,
    IcpsRoutingModule,
    FontAwesomeModule
  ]
})
export class IcpsModule { }
