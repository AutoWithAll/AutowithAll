import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostLeasingPlanDialogComponent } from '../post-leasing-plan-dialog/post-leasing-plan-dialog.component';

@Component({
  selector: 'app-insurance-view-ads',
  templateUrl: './insurance-view-ads.component.html',
  styleUrls: ['./insurance-view-ads.component.css']
})
export class InsuranceViewAdsComponent implements OnInit {
  

  constructor(public dialog:MatDialog) { }
  data = [
    {
      name:"BMW i8",
      date:"2018/03/05",
      from: "Colombo",
      year:"2018",
      price: "1,000,000"
    },
    {
      name:"Mustang",
      date:"2019/05/22",
      from: "Colombo",
      year:"2019",
      price: "1,540,000"
    },
    {
      name:"Audi A4",
      date:"2020/01/08",
      from: "Colombo",
      year:"2018",
      price: "1,635,000"
    },
    {
      name:"Audi A4",
      date:"2020/01/08",
      from: "Gampaha",
      year:"2018",
      price: "1,635,000"
    }
  ];

  openPostLeasingPlanDialog(){
    // console.log(details);
    this.dialog.open(PostLeasingPlanDialogComponent);
  }

  ngOnInit(): void {
  }

}
