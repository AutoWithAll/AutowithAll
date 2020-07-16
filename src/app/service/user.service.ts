import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Login } from '../models/login.model';
import { Observable, throwError } from 'rxjs';
import { retry , catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Ad } from '../models/ad.model';

// import { appconfig } from '../config/appconfig'

// const headeroption = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient , private toaster: ToastrService) {}

  loginUser(user: Login) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(user);
    // return this.http.post('http://localhost:8080/register', user, {headers} ).pipe();
    return this.http
      .post<User>('http://localhost:8080/login', user).pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error) {
    let errorMessage = 'error';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log('ERROR' + errorMessage)
  
    return throwError(errorMessage);

  }

  

  // logOut() {
  //   sessionStorage.removeItem('username');
  // }

  register(user: User) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(user);
    // return this.http.post('http://localhost:8080/register', user, {headers} ).pipe();
    return this.http
      .post<User>('http://localhost:8080/register', user)
      .subscribe({
        next: (res) => console.log(JSON.stringify(res)),
        error: (err) => console.error('There was an error.', err),
      });
  }

  postAd(ad: Ad) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log(ad);
    // return this.http.post('http://localhost:8080/register', user, {headers} ).pipe();
    return this.http
      .post<Ad>('http://localhost:8080/post_add', ad);
      
  }
}
