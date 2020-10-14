import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HomeService } from '../service/home.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-viewad',
  templateUrl: './home-viewad.component.html',
  styleUrls: ['./home-viewad.component.css']
})
export class HomeViewadComponent implements OnInit {
  releventAd;

  constructor(private homeService : HomeService , private dialog : MatDialog) { }

  ngOnInit(): void {
    this.releventAd = this.homeService.getId();
    console.warn(this.releventAd)

  }
  viewImg(id){
    this.homeService.setImg(id);
    this.dialog.open(ViewImgComponent);
  }

 

}
@Component({
  selector: 'home-viewimg',
  templateUrl: 'home-viewimg.html',
})
export class ViewImgComponent {
  msg : String;
  img;

  constructor(private homeService: HomeService){}

  ngOnInit(){
    this.img = this.homeService.getImg();
  }
}
