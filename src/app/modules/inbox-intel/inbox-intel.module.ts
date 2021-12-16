import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxIntelRoutingModule } from './inbox-intel-routing.module';
import {InboxIntelComponent} from "./inbox-intel.component";

@NgModule({
  declarations: [InboxIntelComponent],
  imports: [
    CommonModule,
    InboxIntelRoutingModule
  ]
})
export class InboxIntelModule { }
