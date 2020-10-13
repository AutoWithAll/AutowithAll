 
import {ChangeDetectorRef, Component } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../models/user.model';
import { InsuranceDashboardDialog } from '../insurance-dashboard/insurance-dashboard.component';
 
@Component({
  selector: 'app-leasing-dashboard',
  templateUrl: './leasing-dashboard.component.html',
  styleUrls: ['./leasing-dashboard.component.css']
})
export class LeasingDashboardComponent   {
  user: User;
   

  constructor( public dialog:MatDialog ,private tokenStorageService : TokenStorageService,private tokenService: TokenStorageService,private authService: AuthenticationService, private userService : UserService)  {}

  ngOnInit(){
    this.user = this.tokenStorageService.getUser();
  }

  openDialog(){
    const dialogRef = this.dialog.open(InsuranceDashboardDialog );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

   

}

 