import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {UserService  } from "../service/user.service";

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
   
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver,private service: UserService) { }

  ngOnInit(): void {
    
  }

}
