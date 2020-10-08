import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Login } from '../models/login.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Ad } from '../models/ad.model';

import { Lease} from '../models/lease.model'

import { TokenStorageService } from "./token-storage.service";
import { Identifiers } from '@angular/compiler';



const headeroption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  

  constructor(private http : HttpClient) {}

  getads(){
    return this.http.get('http://localhost:8080/advertisement/getconfrimad');
  }   //Home Component

  postAd(ad : Ad){
    console.log(ad)
    return this.http.post('http://localhost:8080/advertisement/postadd', ad);
  }   // Post Add By Sales Agent

  getImage(id){
    return this.http.get('http://localhost:8080/advertisement/getimage/{id}');
  }

  getAllUsers(){
    return this.http.get('http://localhost:8080/user/getallusers');
  }
  getAddsByUser() : Observable<any>{
    return this.http.get('http://localhost:8080/advertisement/getAddsByCurrentUser');
  }

  getOneAd(id) : Observable<any>{
    return this.http.get('http://localhost:8080/advertisement/getAdById/' + id);
  }


  postLease(lease : Lease){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(lease);

    return this.http.post<Lease>('http://localhost:8080/postlease' , lease);

  }

}
