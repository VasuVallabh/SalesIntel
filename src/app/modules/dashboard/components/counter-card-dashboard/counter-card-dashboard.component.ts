import {Component, OnInit, Input, AfterViewInit,} from '@angular/core';

@Component({
  selector: 'app-counter-card-dashboard',
  templateUrl: './counter-card-dashboard.component.html',
  styleUrls: ['./counter-card-dashboard.component.scss']
})
export class CounterCardDashboardComponent implements OnInit, AfterViewInit {

  @Input() key: any;
  @Input() value: any;

  count: Object = {}

  constructor() {
  }

  ngOnInit(): void {
    // this.value = this.value.replace(/[^0-9]/g,'');
  }

  ngAfterViewInit(): void {
    this.count = {
      countTo: this.value.replace(/[^0-9]/g,''),
      from: 0,
      duration: 1
    };
  }

}
