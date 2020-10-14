import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-viewleaseplan',
  templateUrl: './viewleaseplan.component.html',
  styleUrls: ['./viewleaseplan.component.css']
})
export class ViewleaseplanComponent implements OnInit {

  leaseList;
  adId;

  constructor(private homeService : HomeService) { }

  ngOnInit(): void {
    this.adId = this.homeService.getLeasePlanId();
    console.log(this.adId)
    this.homeService.getLeasingPlans(this.adId).subscribe(res => {
      this.leaseList = res;
    },
    err=> {
      console.log(err)
    })

  }

}
