import { Component, } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TokenStorageService } from '../service/token-storage.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-insurance-dashboard',
  templateUrl: './insurance-dashboard.component.html',
  styleUrls: ['./insurance-dashboard.component.css']
})
export class InsuranceDashboardComponent {

  user : User

  constructor(
    public dialog:MatDialog , 
    private tokenStorageService : TokenStorageService,
     ) { }

     ngOnInit(){
       this.user = this.tokenStorageService.getUser();
     }

  logOut(){
    this.tokenStorageService.signOut();

  }

  openDialog(){
    const dialogRef = this.dialog.open(InsuranceDashboardDialog );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



   
}

@Component({
  selector: 'insurance-dashboard-dialog',
  templateUrl: './insurance-dashboard-dialog.html',
})
export class InsuranceDashboardDialog  {}