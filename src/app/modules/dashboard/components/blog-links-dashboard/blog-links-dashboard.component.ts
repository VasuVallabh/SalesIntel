import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-links-dashboard',
  templateUrl: './blog-links-dashboard.component.html',
  styleUrls: ['./blog-links-dashboard.component.scss']
})
export class BlogLinksDashboardComponent implements OnInit {

  @Input() title: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
