import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  releventAd;
  releventImg;
  leasePlans;
  insurePlans;
  reportAdId;
  

  constructor(private http : HttpClient) { }

  setReportAdId(data){
    this.reportAdId = data;
  }
  getReportAdId(){
    return this.reportAdId;
  }

  setInsurePlans(data){
    this.insurePlans =data;
  }
  getInsurePlanId(){
    return this.insurePlans;
  }
  setLeasePlan(data){
    this.leasePlans = data;
    console.log(data)

  }
  getLeasePlanId(){
    return this.leasePlans;
  }



  setId(data){
    this.releventAd = data;
  }
  getId(){
    return this.releventAd;
  }
  setImg(data){
    this.releventImg = data;
  }
  getImg(){
    return this.releventImg;
  }

  getInsurancePlans(id){
    return this.http.get('http://localhost:8080/user/getiplan' + id);
  }

  getLeasingPlans(id){
    return this.http.get('http://localhost:8080/user/getlplan' + id);
  }

  reportAd(data , id){
    console.log("report" +data + "report" + id)
    return this.http.post('http://localhost:8080/advertisement/reportad'+id , data);
  }

}
