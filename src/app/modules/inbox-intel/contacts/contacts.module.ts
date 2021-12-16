import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    ContactsComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FontAwesomeModule
  ]
})
export class ContactsModule { }
