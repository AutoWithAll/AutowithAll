import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  success: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}

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

  getCurrentUser() : Observable<any>{
    return this.http.get('http://localhost:8080/user/currentuser');
  }
}
