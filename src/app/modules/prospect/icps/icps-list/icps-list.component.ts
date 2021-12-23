import { Component, OnInit } from '@angular/core';
import { faCaretDown, faAddressCard, faTrash } from '@fortawesome/free-solid-svg-icons';
import { IICPs } from "../../../../models/IICPs";
import { IcpService } from "../services/icp.service"
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-icps-list',
  templateUrl: './icps-list.component.html',
  styleUrls: ['./icps-list.component.scss']
})
export class IcpsListComponent implements OnInit {

  faCaretDown = faCaretDown;
  faAddressCard = faAddressCard;
  faTrash = faTrash;

  mData:IICPs[] = [];

  constructor(private icpService: IcpService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.icpService
      .getIcps()
      .subscribe((value) => {
        this.mData = value
      });
  }

  navigateToEdit(name: string) {
    console.log(name);
    //navigate to edit with the edit data name
    this.router.navigate(['/prospect/icps/edit'],{relativeTo: this.activatedRoute});
  }
}
