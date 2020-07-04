 
import {ChangeDetectorRef, Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-leasing-dashboard',
  templateUrl: './leasing-dashboard.component.html',
  styleUrls: ['./leasing-dashboard.component.css']
})
export class LeasingDashboardComponent   {
   

  constructor(public dialog:MatDialog )  {}

  openDialog() {
    const dialogRef = this.dialog.open(LeasingDashboardDialog );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
    


   

}

@Component({
  selector: 'leasing-dashboard-dialog',
  templateUrl: './leasing-dashboard-dialog.html',
})
export class LeasingDashboardDialog  {}
