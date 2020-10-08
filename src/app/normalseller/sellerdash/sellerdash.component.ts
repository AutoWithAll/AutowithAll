import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-sellerdash',
  templateUrl: './sellerdash.component.html',
  styleUrls: ['./sellerdash.component.css']
})
export class SellerdashComponent implements OnInit {
  
  user: any;
  postedAd: any;
  remainAd: any;

  constructor(private tokenService: TokenStorageService,private authService: AuthenticationService, private userService : UserService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(res => {
      this.user = res;
    })

    this.userService.remainAdCount().subscribe(res => {
      console.log(res)  
      this.postedAd = res;
    })
    this.userService.remainpostAdCount().subscribe(res => {
      console.log(res)
      this.remainAd = res;
    })
  }

}
