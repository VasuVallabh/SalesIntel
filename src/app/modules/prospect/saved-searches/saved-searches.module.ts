import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SavedSearchesRoutingModule} from "./saved-searches-routing.module";
import {SavedSearchesComponent} from "./saved-searches.component";



@NgModule({
  declarations: [SavedSearchesComponent],
  imports: [
    CommonModule,
    SavedSearchesRoutingModule
  ]
})
export class SavedSearchesModule { }
