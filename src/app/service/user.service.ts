import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
// import { appconfig } from '../config/appconfig'

// const headeroption = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // authenticate(username, password) {
  //   if (username === 'akitha' && password === '123') {
  //     sessionStorage.setItem('username', username);
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // isUserLoggedIn() {
  //   let user = sessionStorage.getItem('username');
  //   console.log(!(user === null));
  //   return !(user === null);
  // }

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
}
