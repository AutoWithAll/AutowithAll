import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-salesdashboard',
  templateUrl: './salesdashboard.component.html',
  styleUrls: ['./salesdashboard.component.css'],
})
export class SalesdashboardComponent implements OnInit {
  user;
  remainAd : any
  postedAd  : any

  constructor(private tokenService: TokenStorageService,private authService: AuthenticationService, private userService : UserService) {}

  ngOnInit(): void {
    // console.log(this.tokenService.getUser());
    // this.user = this.tokenService.getUser();
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
