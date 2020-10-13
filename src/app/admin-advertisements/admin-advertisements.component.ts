import { Component, OnInit } from '@angular/core';
import {UserService  } from "../service/user.service";
import { Ad, AdDetails } from 'src/app/models/ad.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-advertisements',
  templateUrl: './admin-advertisements.component.html',
  styleUrls: ['./admin-advertisements.component.css']
})
export class AdminAdvertisementsComponent implements OnInit {
  adDetail : AdDetails = <AdDetails>{};
  data:any
  newAds:any
  confiremedAds:any;
  reportAdId:number;

  constructor(private service: UserService  ) { }

  ngOnInit(): void {
    this.service.getads().subscribe(res=>{
      //console.log(res);
      this.data = res;
      //console.log();
    });
    this.service.getNewAds().subscribe(res=>{
     // console.log(res);
      this.newAds=res;

    });
    this.service.getConfirmedAds().subscribe(res=>{
      //console.log(res);
      this.confiremedAds=res;

    });
   
  }
  viewAd(id){
    //console.log(id)
    this.service.getOneAd(id).subscribe(res => {
      this.adDetail = res;
      this.reportAdId=this.adDetail.id;
      console.log(this.adDetail)
    });
  }
  // scroll(el: HTMLElement) {
  //   el.scrollIntoView({behavior: 'smooth'});
  // }
  acceptAd(id){
   this.service.acceptAd(id).subscribe(res=>{
     console.log("successful");
   }) ;
   
  }

}
