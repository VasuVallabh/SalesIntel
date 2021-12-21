import { Component, OnInit } from '@angular/core';
import { faTimes, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  faTimes = faTimes;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  isUpload:boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToTasks() {
    this.router.navigate(['/bounce-intel/tasks'],{relativeTo: this.activatedRoute});
  }

  goToProcessing() {
    this.isUpload = false;
  }

  goToUpload() {
    this.isUpload = true;
  }

  startProcessing() {
  }

  activateUpload() {
    if(this.isUpload){
      return 'active'
    }
    else{
      return ''
    }
  }

  activateProcessing() {
    if(this.isUpload){
      return ''
    }
    else{
      return 'active'
    }
  }



}
