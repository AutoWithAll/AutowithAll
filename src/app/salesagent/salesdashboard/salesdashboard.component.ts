import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { ChoosepackageComponent } from '../salesdashboard/choosepackage/choosepackage.component';
import { PackageService } from 'src/app/service/package.service';
import { ActivatedRoute } from '@angular/router';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-salesdashboard',
  templateUrl: './salesdashboard.component.html',
  styleUrls: ['./salesdashboard.component.css'],
})
export class SalesdashboardComponent implements OnInit {
  user;
  remainAd: any;
  postedAd: any;

  userId: number;
  payment = new Payment();
  orderId: number;
  pId: number;
  wait =true;

  curPackDetail;

  constructor(
    private tokenService: TokenStorageService,
    private packService: PackageService,
    private authService: AuthenticationService,
    public dialog: MatDialog,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private paymentService: PaymentService
  ) {
    this.authService.getCurrentUser().subscribe((res) => {
      this.user = res;
    });
  }

  ngOnInit(): void {
    this.orderId = +this.activatedRoute.snapshot.queryParamMap.get('order_id');
    // console.log(this.tokenService.getUser());
    // this.user = this.tokenService.getUser();
    this.authService.getCurrentUser().subscribe((res) => {
      this.user = res;
      console.log("---------------------");
      console.log(this.user);
      this.userId = this.user.id;
      if(this.orderId) {
        this.payment.id = this.orderId;
        this.pId = +window.sessionStorage.getItem('pid');
        this.paymentService.savePament(this.payment,this.userId,this.pId).subscribe(
          data=>{console.log(data);},
          error=>{console.log(error);}
        );
      }
    });

    

    this.paymentService.getAll().subscribe(
      data=>{
        console.log(data);},
      error=>{console.log(error);}
    );

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
