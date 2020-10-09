import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostLeasingPlanDialogComponent } from '../post-leasing-plan-dialog/post-leasing-plan-dialog.component';
import { TokenStorageService } from '../service/token-storage.service';
import { AdDetails } from '../models/ad.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-insurance-view-ads',
  templateUrl: './insurance-view-ads.component.html',
  styleUrls: ['./insurance-view-ads.component.css']
})
export class InsuranceViewAdsComponent implements OnInit {

  adDetails : any = <any>{};
  

  constructor(public dialog:MatDialog , private userService : UserService) { }
  

  openPostLeasingPlanDialog(){
    // console.log(details);
    this.dialog.open(PostLeasingPlanDialogComponent);
  }

  ngOnInit(): void {

    this.userService.getads().subscribe(res => {
      this.adDetails = res;
    })
    
  }

}
