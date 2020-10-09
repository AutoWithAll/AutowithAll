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

  constructor(private service: UserService,private adService: UserService,private modalService: NgbModal) { }

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

    });
   
  }
  viewAd(id){
    console.log(id)
    this.adService.getOneAd(id).subscribe(res => {
      this.adDetail = res;
      console.log(this.adDetail)
    });
  }
  

}
