import { Component, OnInit } from '@angular/core';
import { faChartBar, faUsers,  faSearchPlus, faEnvelope, faPaperPlane, faChartPie, faNewspaper} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  faChartBar = faChartBar;
  faUsers = faUsers;
  faSearchPlus = faSearchPlus;
  faEnvelope = faEnvelope;
  faPaperPlane = faPaperPlane;
  faChartPie = faChartPie;
  faNewspaper = faNewspaper;


  constructor() { }

  ngOnInit(): void {
  }

}
