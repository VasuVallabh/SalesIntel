import { Component, OnInit } from '@angular/core';
import { faAddressCard, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icps',
  templateUrl: './icps.component.html',
  styleUrls: ['./icps.component.scss']
})
export class IcpsComponent implements OnInit {

  faAddressCard = faAddressCard;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

}
