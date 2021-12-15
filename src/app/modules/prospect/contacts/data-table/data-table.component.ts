import { Component, OnInit } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { ContactsService } from '../services/contacts.service';
import { IContacts } from "../../../../models/IContacts";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  faCaretDown = faCaretDown;
  mData:IContacts[] = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService
      .getContacts()
      .subscribe((value) => {
        this.mData = value
      });
  }

  openDetails(id: string) {
  }
}
