import {Component, OnInit} from '@angular/core';
import {IInboxIntelContacts} from "../../../../models/IInboxIntelContacts";
import {ContactsService} from "../services/contacts.service"
import { faEnvelope, faPhone, faCaretDown, faUserCheck, faDesktop } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faCaretDown = faCaretDown;
  faUserCheck = faUserCheck;
  faDesktop = faDesktop;

  mData: IInboxIntelContacts[] = [];

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService
      .getInboxIntelContacts()
      .subscribe((value) => {
        this.mData = value
      });
  }

}
