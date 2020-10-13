import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home-viewad',
  templateUrl: './home-viewad.component.html',
  styleUrls: ['./home-viewad.component.css']
})
export class HomeViewadComponent implements OnInit {
  releventAd;

  constructor(private homeService : HomeService) { }

  ngOnInit(): void {
    this.releventAd = this.homeService.getId();
    console.warn(this.releventAd)

  }

 

}
