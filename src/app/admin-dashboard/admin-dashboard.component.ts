import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {UserService  } from "../service/user.service";
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { ThrowStmt } from '@angular/compiler';

export interface PeriodicElement {
  Agent: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,  Agent: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2,  Agent: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, Agent: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4,  Agent: 'Beryllium', weight: 9.0122, symbol: 'Be'},
   
   
];
 

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  users:any
  userCount:number
  userDetail: User = <User>{};
  newAds:any
  newAdsCount:number
  agents:any
  agentCount:number
  leasings:any
  leasingCount:number
  insurance:any
  insuranceCount:number
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver,private service: UserService, private tokenService: TokenStorageService,
    private authService : AuthenticationService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(res=>{
      this.users = res;
      this.userCount=this.users.length;
      
    })
    this.service.getAgents().subscribe(res=>{
      this.agents=res;
      this.agentCount=this.agents.length;
    })
    this.service.getAllLeasing().subscribe(res=>{
      this.leasings=res;
      this.leasingCount=this.leasings.length;
    })
    this.service.getAllInsurance().subscribe(res=>{
      this.insurance=res;
      this.insuranceCount=this.insurance.length
    })
    this.userDetail = this.tokenService.getUser();
    this.service.getNewAds().subscribe(res=>{
      // console.log(res);
       this.newAds=res;
       this.newAdsCount=this.newAds.length;
 
     });
    
  }

}
