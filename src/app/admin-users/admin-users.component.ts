import { Component, OnInit } from '@angular/core';
import {UserService  } from "../service/user.service";
import {User} from'src/app/models/user.model';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users:any
  agents:any
  normalUsers:any
  userview:User=<User>{};

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(res=>{
      console.log(res);
      this.users = res;
      console.log();
    });
    this.service.getAgents().subscribe(res=>{
      this.agents=res;
    });
    this.service.getNormalUsers().subscribe(res=>{
      this.normalUsers=res;
    });
    
    
    
  }
  viewUser(id){
    this.service.getOneUser(id).subscribe(res=>{
      this.userview=res;
    });
  }


}
