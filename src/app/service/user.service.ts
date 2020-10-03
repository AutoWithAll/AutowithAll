import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Login } from '../models/login.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Ad } from '../models/ad.model';
import { TokenStorageService } from "./token-storage.service";


const headeroption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  

  constructor(private http : HttpClient) {}

  getads(){
    return this.http.get('http://localhost:8080/advertisement/getallad');
  }   //Home Component

  postAd(ad : Ad){
    console.log(ad)
    return this.http.post('http://localhost:8080/advertisement/postadd', ad);
  }   // Post Add By Sales Agent

  uploadImage(image){
    return this.http.post('http://localhost:8080/advertisement/uploadImage' , image);
  } //Add 5 images With Add
  
}
