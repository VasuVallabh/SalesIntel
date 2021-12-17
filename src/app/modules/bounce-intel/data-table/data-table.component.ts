import {Component, OnInit} from '@angular/core';
import {IBounceIntel} from "../../../models/IBounceIntel";
import {BounceIntelService} from "../services/bounce-intel.service";
import { faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  faDownload = faDownload;
  faTrash = faTrash
  mData: IBounceIntel[] = [];

  constructor(private bounceIntelService: BounceIntelService) {}

  ngOnInit(): void {
    this.bounceIntelService
      .getBounceIntelCompanies()
      .subscribe((value) => {
        this.mData = value
      });
  }

}
