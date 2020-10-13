import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminLeasingsDetailsComponent } from '../admin-leasings-details/admin-leasings-details.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin-leasings',
  templateUrl: './admin-leasings.component.html',
  styleUrls: ['./admin-leasings.component.css']
})
export class AdminLeasingsComponent implements OnInit {

  list;

  constructor(private dialog: MatDialog, private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getLeasingCompany().subscribe(res => {
      this.list =res;
      console.log(res)
    },
    err => {
      console.log(err)
    })
  }

  viewDetails(data){
    this.userService.setleasingDetailsAdmin(data);
    this.dialog.open(AdminLeasingsDetailsComponent);  
  }
  

}
