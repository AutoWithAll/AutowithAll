import { Component, OnInit, Input } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {UserService  } from "../service/user.service";
import { HomeService } from '../service/home.service';
import { User } from '../models/user.model';

// import { MaterialModule } from '@angular/material'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  list : any;
  agentList : any = <any>{};
  img;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1071, 1072, 111].map((n) => `https://picsum.photos/id/${n}/400/200`);

  constructor(config: NgbCarouselConfig, private service: UserService , private homeService : HomeService) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.getAgentList();
    this.service.getads().subscribe(res=>{
      console.log("home geta ads" + res);
      this.list = res;
    })

  }

  getAgentList(){
    this.service.getAgentDetails().subscribe(res => {
      this.agentList = res;
      console.log("Agent list" +res);
    })
  }
  viewAd(object){
    console.log("work view ad" + object)
    this.homeService.setId(object);
  }

  
  }