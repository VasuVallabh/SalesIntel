import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-counter-card-dashboard',
  templateUrl: './counter-card-dashboard.component.html',
  styleUrls: ['./counter-card-dashboard.component.scss']
})
export class CounterCardDashboardComponent implements OnInit {

  @Input() key: any;
  @Input() value: any;
  @Input() symbol: any;

  endValue: number = 0; // this is the value that the counter will reach
  counter: number = 0; // this is the current value of the counter
  time: number = 10; // this is the time in milliseconds that the counter will take to reach the end value
  counterSpeed: number = 0; // this is the speed of the counter

  constructor() {}

  ngOnInit(): void {
    this.endValue = parseInt(this.value.replace(/[^0-9]/g, ''));
    this.counterSpeed = Math.floor(this.endValue / this.time);

    let myTimer = setInterval(()=>{
      if(this.counter >= this.endValue){
        clearInterval(myTimer);
      }
      else{
        if(this.counter + this.counterSpeed < this.endValue && this.counter < this.endValue){
          this.counter = this.counter + this.counterSpeed;
        } else {
          this.counter = this.endValue;
          clearInterval(myTimer);
        }
      }
    }, this.time);
  }
}
