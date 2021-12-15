import { Component, OnInit } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { IICPs } from "../../../../models/IICPs";
import { IcpService } from "../services/icp.service"

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  faCaretDown = faCaretDown;
  mData:IICPs[] = [];

  constructor(private icpService: IcpService) { }

  ngOnInit(): void {
    this.icpService
      .getIcp()
      .subscribe((value) => {
        this.mData = value
      });
  }

  openDetails(id: string) {
  }
}
