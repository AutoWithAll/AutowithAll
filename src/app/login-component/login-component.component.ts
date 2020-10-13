import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';
import { AuthenticationService } from '../service/authentication.service';
import { TokenStorageService } from '../service/token-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  //form: any = {};
  loginForm: FormGroup;
  isLoggedIn = false;
  roles: string[] = [];
  isLoginFailed = false;
  errorMessage = '';
  role: string;

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthenticationService,
    private tokenStorage: TokenStorageService,
    private toster: ToastrService,
    private router: Router
  ) {}

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: [''],
    });

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  onLoginSubmit() {
    const logindata = {
      username: this.username.value,
      password: this.password.value,
    };

    this.authService.loginUser(logindata).subscribe(
      (data) => {
        console.log(data.token);
        console.log(data);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data); 

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.tokenStorage.getUser().roles;

        this.toster.success('Login Successfully');
        console.log(this.role + 'login role');

        setTimeout(() => {
          if (this.role == 'ROLE_ADMIN') {
            this.router.navigate(['/adminDashboard']);
          } else if (this.role == 'ROLE_AGENT') {
            this.router.navigate(['/salesagentdash']);
          } else if (this.role == 'ROLE_LCOMPANY') {
            this.router.navigate(['/lease']);
          }else if (this.role == 'ROLE_USER') {
            this.router.navigate(['/sellerdash']);
          }else if (this.role == 'ROLE_ICOMPANY') {
            this.router.navigate(['/insurance']);
          }
        }, 2000);
      },
      (err) => {
        console.log('eror genarate ' + err);
        this.toster.error('Username or Passsword Incorrect');
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
