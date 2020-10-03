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
    return this.http.get('http://localhost/advertisement/getallad');
  }

  
}
