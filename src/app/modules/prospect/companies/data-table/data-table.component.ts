import {Component, OnInit} from '@angular/core';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {CompaniesService} from '../services/companies.service';
import {ICompanies} from "../../../../core/models/ICompanies";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  faCaretDown = faCaretDown;
  mData: ICompanies[] = [];

  constructor(private companiesService: CompaniesService,
              private route: ActivatedRoute,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.companiesService
      .getCompanies()
      .subscribe((value) => {
        this.mData = value
      });
  }

  navigateToDetails(name: string) {
    console.log(name);
    this.router.navigate(['details'], { relativeTo: this.route });
  }

  getClassof(fit_score: string) {

    if(Number(fit_score) > 90)
    {
      return { "width": fit_score+'%', "background": 'rgb(41,163,61)' }
    }

    else if(Number(fit_score) > 80){
      return { "width": fit_score+'%', "background": 'rgb(74,191,64)' }
    }

    else if(Number(fit_score) > 70){
      return { "width": fit_score+'%', "background": 'rgb(128,191,64)' }
    }

    else if(Number(fit_score) > 60){
      return { "width": fit_score+'%', "background": 'rgb(175,209,71)' }
    }

    else if(Number(fit_score) > 50){
      return { "width": fit_score+'%', "background": 'rgb(204,204,51)' }
    }

    else if(Number(fit_score) > 40){
      return { "width": fit_score+'%', "background": 'rgb(204,166,51)' }
    }

    else if(Number(fit_score) > 30){
      return { "width": fit_score+'%', "background": 'rgb(204,128,51)' }
    }

    else if(Number(fit_score) > 20){
      return { "width": fit_score+'%', "background": 'rgb(214,133,92)' }
    }

    else if(Number(fit_score) > 10){
      return { "width": fit_score+'%', "background": 'rgb(214,112,92)' }
    }

    else{
      return { "width": fit_score+'%', "background": 'rgb(214,92,92)' }
    }
  }
}
