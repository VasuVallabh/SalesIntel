import { Component, OnInit } from '@angular/core';
import { faUpload, faRedo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bounce-intel',
  templateUrl: './bounce-intel.component.html',
  styleUrls: ['./bounce-intel.component.scss']
})
export class BounceIntelComponent implements OnInit {

  faUpload = faUpload;
  faRedo = faRedo

  constructor() { }

  ngOnInit(): void {
  }

}
