import { Component, OnInit } from '@angular/core';
import {UserService  } from "../service/user.service";

@Component({
  selector: 'app-admin-advertisements',
  templateUrl: './admin-advertisements.component.html',
  styleUrls: ['./admin-advertisements.component.css']
})
export class AdminAdvertisementsComponent implements OnInit {
  data:any
  newAds:any
  confiremedAds:any;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getads().subscribe(res=>{
      //console.log(res);
      this.data = res;
      //console.log();
    });
    this.service.getNewAds().subscribe(res=>{
      console.log(res);
      this.newAds=res;

    });
    this.service.getConfiremedAds().subscribe(res=>{
      console.log(res);
      this.confiremedAds=res;

    })
  }

}
