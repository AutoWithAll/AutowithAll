import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminLeasingsDetailsComponent } from '../admin-leasings-details/admin-leasings-details.component';

@Component({
  selector: 'app-admin-leasings',
  templateUrl: './admin-leasings.component.html',
  styleUrls: ['./admin-leasings.component.css']
})
export class AdminLeasingsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewDetails(){
    this.dialog.open(AdminLeasingsDetailsComponent);
  }

}
