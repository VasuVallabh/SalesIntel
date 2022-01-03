import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faBellSlash, faUsers,
        faPhone, faLink, faSearchPlus,
        faFlag, faAngleDoubleDown, faStar, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
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
  faPhone = faPhone;
  faLinkedin = faLinkedin;
  faLink = faLink;
  faSearchPlus = faSearchPlus;
  faFlag = faFlag;
  faAngleDoubleDown = faAngleDoubleDown;
  faStar = faStar;
  faQuestionCircle = faQuestionCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
