import { Component, OnInit } from '@angular/core';
import { faQuestionCircle, faTimes, faPlus, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icps-edit',
  templateUrl: './icps-edit.component.html',
  styleUrls: ['./icps-edit.component.scss']
})
export class IcpsEditComponent implements OnInit {

  faQuestionCircle = faQuestionCircle;
  faTimes = faTimes;
  faPlus = faPlus;
  faSave = faSave;

  constructor() { }

  ngOnInit(): void {
  }

}
