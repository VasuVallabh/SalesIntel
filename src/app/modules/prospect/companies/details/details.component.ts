import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faBellSlash, faUsers, faMapMarker,
        faPhone, faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faBellSlash = faBellSlash;
  faUsers = faUsers;
  faMapMarker = faMapMarker;
  faPhone = faPhone;
  faLinkedin = faLinkedin;
  faLink = faLink;

  constructor() { }

  ngOnInit(): void {
  }

}
