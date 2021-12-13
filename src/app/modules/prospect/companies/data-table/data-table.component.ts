import {Component, OnInit} from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  faCaretDown = faCaretDown;
  N: Number = 82;
  data: any[] = [];

  constructor() {
    this.data = Array.from(Array(this.N).keys())
  }

  ngOnInit(): void {

  }

}
