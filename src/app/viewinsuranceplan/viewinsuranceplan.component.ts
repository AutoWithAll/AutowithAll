import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-viewinsuranceplan',
  templateUrl: './viewinsuranceplan.component.html',
  styleUrls: ['./viewinsuranceplan.component.css']
})
export class ViewinsuranceplanComponent implements OnInit {

  adId;
  insList;

  constructor(private homeService : HomeService) { }

  ngOnInit(): void {
    this.adId = this.homeService.getInsurePlanId();

    this.homeService.getInsurancePlans(this.adId).subscribe(res => {
      this.insList = res;
      console.log(res)
      console.log(this.adId)
    },
    err=> {
      console.log(err);
    })

  }

}
