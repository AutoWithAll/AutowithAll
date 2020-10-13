import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { ChoosepackageComponent } from '../salesdashboard/choosepackage/choosepackage.component';
import { PackageService } from 'src/app/service/package.service';

@Component({
  selector: 'app-salesdashboard',
  templateUrl: './salesdashboard.component.html',
  styleUrls: ['./salesdashboard.component.css'],
})
export class SalesdashboardComponent implements OnInit {
  user;
  remainAd: any;
  postedAd: any;

  wait =true;

  curPackDetail;

  constructor(
    private tokenService: TokenStorageService,
    private packService: PackageService,
    private authService: AuthenticationService,
    public dialog: MatDialog,
    private userService: UserService
  ) {
    this.authService.getCurrentUser().subscribe((res)=>{
      this.user =res;
    })
  }

  ngOnInit(): void {
    
    this.authService.getCurrentUser().subscribe((res) => {
      this.user = res;
      this.wait = false;
    });

    this.packService.isExistAgent().subscribe(res => {
      this.curPackDetail = res;
    })

    this.packService.remainAdCount().subscribe((res) => {
      console.log(res);
      this.postedAd = res;
    });
    this.packService.remainpostAdCount().subscribe((res) => {
      console.log(res);
      this.remainAd = res;
    });
  }

  ifActive() {
    return this.packService.ifActivePackage();
  }

  openPostLeasingPlanDialog() {
    
    this.dialog.open(ChoosepackageComponent, {
      width: '700px',
      height: '350px',
    });
  }

  //get package details
  getCurrentPack() {
    this.packService.getCurrentPackage().subscribe({
      next: (res) => {
        this.curPackDetail = res;
      },
    });
  }
}
