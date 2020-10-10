import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/service/package.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-choosepackage',
  templateUrl: './choosepackage.component.html',
  styleUrls: ['./choosepackage.component.css']
})
export class ChoosepackageComponent implements OnInit {
  platinumDetails;
  goldDetails;
  silverDetails;
  

  constructor(private packService : PackageService, private dialogRef:MatDialogRef<ChoosepackageComponent>) {
    this.getPlatinum();
    this.getGold();
    this.getSilver();
   }

  ngOnInit(): void {
    
  }

  getPlatinum(){
    this.packService.getPackageDetails(1).subscribe({next :(res) => {
      this.platinumDetails = res;

    },
  error: (err) => {
    console.log(err)
  }})
  }
  getGold(){
    this.packService.getPackageDetails(2).subscribe({next :(res) => {
      this.goldDetails = res;

    },
  error: (err) => {
    console.log(err)
  }})
  }
  getSilver(){
    this.packService.getPackageDetails(3).subscribe({next :(res) => {
      this.silverDetails = res;

    },
  error: (err) => {
    console.log(err)
  }})
  }

  //Choose Plan
  choosePlan(id){
    console.log(id);
    this.dialogRef.close();
    

  }

  



}
