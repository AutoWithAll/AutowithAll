import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Login } from '../models/login.model';
import { map } from 'rxjs/operators';

class UserDetails {
  constructor(
    public id: number,
    public fname: string,
    public lname: string,
    public username: string,
    public tnumber: string,
    public nic: string,
    public password: string,
    public role: string[],
    public cName: string,
    public address: string,
    public regNum: string,
    public imgId: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  success: boolean;

  usrDetail: User[];
  loading: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {
    this.usrDetail = [];
    this.loading = false;
  }

  registerUser(user: User): Observable<any> {
    console.log(user);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/api/auth/signup', user);
  }

  loginUser(credintional: Login): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(credintional);
    return this.http.post(
      'http://localhost:8080/api/auth/signin',
      credintional
    );
  }

  logout() {
    this.tokenStorage.signOut();

    this.router.navigate(['']);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get('http://localhost:8080/user/currentuser');
  }








  

  // ##### get Current user Details
  getCurUsr() {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `http://localhost:8080/user/currentuser`;
      this.http
        .get(apiURL)
        .toPromise()
        .then(
          (res) => {
            console.log(res)
            // Success
            map(res=>{
              return res;
            })
            // this.usrDetail = res.usrDetail.map((item) => {
            //   return new UserDetails(
            //     item.id,
            //     item.fname,
            //     item.lname,
            //     item.username,
            //     item.tnumber,
            //     item.nic,
            //     item.password,
            //     item.role,
            //     item.cName,
            //     item.address,
            //     item.regNum,
            //     item.imgId
            //   );
            // });
            resolve();
          },
          (msg) => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
}
