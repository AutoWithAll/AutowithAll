import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-salesdashboard',
  templateUrl: './salesdashboard.component.html',
  styleUrls: ['./salesdashboard.component.css']
})

export class SalesdashboardComponent implements OnInit {

  user : User;

  constructor(private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    console.log(this.tokenService.getUser());
    this.user = this.tokenService.getUser();
  }

  logout(){
    this.tokenService.signOut();
  }

  


}