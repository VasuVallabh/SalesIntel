import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  counterData: Map<string, string>= new Map<string, string>();
  blogLinksTitle: string[] = [];

  constructor() { }

  ngOnInit(): void {

    // Counter Data
    this.counterData.set('Companies', '3,456');
    this.counterData.set('Contacts', '12,345');
    this.counterData.set('Metric', '12%');

    // Blog links Titles
    this.blogLinksTitle.push('VISITORINTEL');
    this.blogLinksTitle.push('NEWS AND ALERTS');
    this.blogLinksTitle.push('RECOMMENDATIONS');

  }

}
