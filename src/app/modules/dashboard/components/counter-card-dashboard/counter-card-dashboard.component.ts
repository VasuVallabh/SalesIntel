import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-counter-card-dashboard',
  templateUrl: './counter-card-dashboard.component.html',
  styleUrls: ['./counter-card-dashboard.component.scss']
})
export class CounterCardDashboardComponent implements OnInit {

  @Input() key: any;
  @Input() value: any;

  constructor() {}

  ngOnInit(): void {
  }

}
