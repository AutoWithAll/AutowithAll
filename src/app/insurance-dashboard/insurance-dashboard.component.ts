import { Component, } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-insurance-dashboard',
  templateUrl: './insurance-dashboard.component.html',
  styleUrls: ['./insurance-dashboard.component.css']
})
export class InsuranceDashboardComponent {

  constructor(public dialog:MatDialog ) { }

  openDialog(){
    const dialogRef = this.dialog.open(InsuranceDashboardDialog );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



   
}

@Component({
  selector: 'insurance-dashboard-dialog',
  templateUrl: './insurance-dashboard-dialog.html',
})
export class InsuranceDashboardDialog  {}