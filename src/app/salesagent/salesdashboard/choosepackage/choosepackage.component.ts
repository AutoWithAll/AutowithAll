import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/service/package.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-choosepackage',
  templateUrl: './choosepackage.component.html',
  styleUrls: ['./choosepackage.component.css']
})
export class ChoosepackageComponent implements OnInit {
  platinumDetails;
  goldDetails;
  silverDetails;

  isLoading = true;
  

  constructor(private packService : PackageService, private toaster : ToastrService, private dialogRef:MatDialogRef<ChoosepackageComponent>) {

   }

  ngOnInit(): void {
    this.getPlatinum();
    this.getGold();
    this.getSilver();
    

    
  }

  getPlatinum(){
    this.packService.getPackageDetails(1).subscribe({next :(res) => {
      this.platinumDetails = res;
      console.log(res)

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
      this.isLoading = false;

    },
  error: (err) => {
    console.log(err)
  }})
  }

  //Choose Plan
  choosePlan(id){
    
    if(this.packService.isExistAgent()){
      this.packService.updatePackage(id).subscribe(res=> {
        console.log(res)
        this.toaster.success("Packege Update Succesfully");
        
      })
    }else{
      this.packService.addPackage(id).subscribe(res => {
        this.toaster.success("Package Aded Successfully");
      })
    
    }
    this.dialogRef.close();
  }
    
}
