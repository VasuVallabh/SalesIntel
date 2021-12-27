import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faBellSlash, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faBellSlash = faBellSlash;
  faUsers = faUsers;

  constructor() { }

  ngOnInit(): void {
  }

}
