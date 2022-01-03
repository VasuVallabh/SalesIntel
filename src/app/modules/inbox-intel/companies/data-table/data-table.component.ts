import {Component, OnInit} from '@angular/core';
import {IInboxIntelCompanies} from "../../../../core/models/IInboxIntelCompanies";
import {CompaniesService} from "../services/companies.service";
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

  mData: IInboxIntelCompanies[] = [];

  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.companiesService
      .getInboxIntelCompanies()
      .subscribe((value) => {
        this.mData = value
      });
  }

}
