import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenStorageService } from '../service/token-storage.service';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-admin-insurance-details',
  templateUrl: './admin-insurance-details.component.html',
  styleUrls: ['./admin-insurance-details.component.css']
})
export class AdminInsuranceDetailsComponent implements OnInit {
  user : User
  constructor(public dialog:MatDialog ,private tokenStorageService : TokenStorageService,private tokenService: TokenStorageService,private authService: AuthenticationService, private userService : UserService) { }

  ngOnInit(): void {
    this.user=this.userService.getinsuranceDetailsAdmin();
  }

}
