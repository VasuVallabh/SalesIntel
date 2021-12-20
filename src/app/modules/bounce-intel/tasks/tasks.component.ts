import { Component, OnInit } from '@angular/core';
import { faUpload, faRedo } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  faUpload = faUpload;
  faRedo = faRedo

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToNew() {
    this.router.navigate(['/bounce-intel/new'],{relativeTo: this.activatedRoute});
  }
}
