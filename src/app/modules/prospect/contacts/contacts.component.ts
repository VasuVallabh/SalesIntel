import { Component, OnInit } from '@angular/core';
import { faShare, faPlus, faSave, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  faShare = faShare;
  faPlus = faPlus;
  faSave = faSave;
  faTachometerAlt = faTachometerAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
