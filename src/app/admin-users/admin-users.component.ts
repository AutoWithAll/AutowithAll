import { Component, OnInit } from '@angular/core';
import {UserService  } from "../service/user.service";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users:any

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(res=>{
      console.log(res);
      this.users = res;
      console.log();
    })
    
  }


}
