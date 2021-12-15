import { Component, OnInit } from '@angular/core';
import { faAddressCard, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ideal-customer-profiles',
  templateUrl: './ideal-customer-profiles.component.html',
  styleUrls: ['./ideal-customer-profiles.component.scss']
})
export class IdealCustomerProfilesComponent implements OnInit {

  faAddressCard = faAddressCard;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

}
