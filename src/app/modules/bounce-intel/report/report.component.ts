import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faInfoCircle, faDownload, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faInfoCircle = faInfoCircle;
  faDownload = faDownload;
  faHeadphones = faHeadphones;

  type = 'doughnut';
  data = {
    labels: ['Valid', 'Invalid', 'Invalid', 'Bad Syntax'],
    datasets: [
      {
        label: "Sales for last 5 months",
        fill:'true',
        backgroundColor: ["#65c761", "#aaaabb","#7d8fe8","#ff9933"],
        data: [6420,3102,2095,728]
      }
    ]
  };

  options = {
    responsive: true,
    maintainAspectRatio: false,
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToBounceIntelTasks() {
    this.router.navigate(['/bounce-intel/tasks'],{relativeTo: this.activatedRoute});
  }
}
