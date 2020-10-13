import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged ;

  constructor( private token : TokenStorageService) { }

  ngOnInit(): void {

    if (this.token.getUser() != null) {
      this.isLogged = true;
      
    } else {
      this.isLogged = false;
    }
    console.log(this.isLogged);

  }
  logOut(){
    this.token.signOut();
  }

}
