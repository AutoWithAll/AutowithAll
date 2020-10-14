import { Component, OnInit } from '@angular/core';
import {UserService  } from "../service/user.service";

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent implements OnInit {
  reports:any

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getReports().subscribe(res=>{
      console.log(res);
      this.reports=res;
    })
  }

}
