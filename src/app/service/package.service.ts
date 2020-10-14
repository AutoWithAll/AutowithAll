import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  packagePrice;
  packageiD;

  SetpackageiD(data){
    this.packageiD = data;
  
  }
  getpackageiD(){
    return this.packageiD;
  }

  SetpackagePrice(data){
    this.SetpackagePrice =data;
  }
  getpackagePrice(){
    return this.packagePrice;
  }

  constructor(private http : HttpClient,  private toaster : ToastrService) { }

  getPackageDetails(id){
    return this.http.get('http://localhost:8080/package/packsDetails/'+id);
  }

  getCurrentPackage(){
    return this.http.get('http://localhost:8080');
  }

  remainAdCount(){
    return this.http.get('http://localhost:8080/advertisement/countpostedad');
  }
  remainpostAdCount(){
    return this.http.get('http://localhost:8080/advertisement/countremainad');
  }
  ifActivePackage(){
    return false; 
  }

  isExistAgent(){
    return this.http.get('http://localhost:8080/agent/isnewagent');
  }
  addPackage(pkgId){
    return this.http.post('http://localhost:8080/agent/packagepurchase/' + pkgId, null);
  }
  updatePackage(pkgId){
    return this.http.put('http://localhost:8080/agent/packageupdate/' + pkgId ,null );
  }


}
