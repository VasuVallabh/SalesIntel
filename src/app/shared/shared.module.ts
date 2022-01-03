import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTabsComponent } from './shared-tabs/shared-tabs.component';

@NgModule({
  declarations: [
    SharedTabsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SharedTabsComponent
  ]
})
export class SharedModule { }
