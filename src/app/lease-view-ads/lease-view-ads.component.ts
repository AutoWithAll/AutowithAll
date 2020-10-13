import { Component, OnInit } from '@angular/core';
import {PostLeasingPlanDialogComponent} from 'src/app/post-leasing-plan-dialog/post-leasing-plan-dialog.component'
import { MatDialog} from '@angular/material/dialog';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-lease-view-ads',
  templateUrl: './lease-view-ads.component.html',
  styleUrls: ['./lease-view-ads.component.css']
})

export class LeaseViewAdsComponent  implements OnInit {
  data : any = <any>{};
  adDetails : any = <any>{};
  constructor(public dialog:MatDialog , private userService : UserService) { }

  

  openPostLeasingPlanDialog(){
    // console.log(details);
    this.dialog.open(PostLeasingPlanDialogComponent);
  }

  ngOnInit(): void {

    this.data = this.userService.getads().subscribe(res => {
      this.adDetails = res;
    })
    
  }

}


 


