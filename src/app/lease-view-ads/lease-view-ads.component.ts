import { Component, OnInit } from '@angular/core';

import {PostLeasingPlanDialogComponent} from 'src/app/post-leasing-plan-dialog/post-leasing-plan-dialog.component'
import { MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-lease-view-ads',
  templateUrl: './lease-view-ads.component.html',
  styleUrls: ['./lease-view-ads.component.css']
})

export class LeaseViewAdsComponent   {

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

}


 


