import { Component, OnInit } from '@angular/core';
import { faShare, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  faShare = faShare;
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
