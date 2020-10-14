import { Component, OnInit } from '@angular/core';
import {UserService  } from "../service/user.service";
import { MatDialog } from '@angular/material/dialog';
import {AdminInsuranceDetailsComponent} from '../admin-insurance-details/admin-insurance-details.component'
 
import { from } from 'rxjs';

@Component({
  selector: 'app-admin-insurance',
  templateUrl: './admin-insurance.component.html',
  styleUrls: ['./admin-insurance.component.css']
})
export class AdminInsuranceComponent implements OnInit {
  list;

  constructor(private dialog: MatDialog, private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getInsuranceCompany().subscribe(res=>{
      this.list=res;
      console.log(res);
    },
    err=>{
      console.log(err)
    }
    )
     
  }
  viewDetails(data){
    this.userService.setinsuranceDetailsAdmin(data);
    this.dialog.open(AdminInsuranceDetailsComponent);  
  }
}
 
