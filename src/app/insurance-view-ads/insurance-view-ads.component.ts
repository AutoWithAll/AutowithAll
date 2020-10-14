import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenStorageService } from '../service/token-storage.service';
import { AdDetails } from '../models/ad.model';
import { UserService } from '../service/user.service';
import { PostInsurancePlanDialogComponent } from '../post-insurance-plan-dialog/post-insurance-plan-dialog.component';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-insurance-view-ads',
  templateUrl: './insurance-view-ads.component.html',
  styleUrls: ['./insurance-view-ads.component.css']
})
export class InsuranceViewAdsComponent implements OnInit {

  adDetails : any = <any>{};
  

  constructor(public dialog:MatDialog , private userService : UserService ,private  homeService : HomeService) { }
  

  PostInsurancePlanDialog(){
    // console.log(details);
    this.dialog.open(PostInsurancePlanDialogComponent);
  }

  ngOnInit(): void {

    this.userService.getads().subscribe(res => {
      this.adDetails = res;
    })
    
  }

  viewAds(item){
    
    this.homeService.setId(item);
  }

}
