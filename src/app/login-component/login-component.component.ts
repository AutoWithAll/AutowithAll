import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  login: Login = new Login();
  data: User = new User();
  loginForm: FormGroup;
  x: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: UserService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  
  get f(){
    return this.loginForm.controls;
  }
  

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: [''],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  // onSubmit() {
  //   const login = {
  //     email: this.email.value,
  //     password: this.password.value,
  //   };
  //   console.log(login);
  // }
  onLoginSubmit() {
    const login = {
      email: this.email.value,
      password: this.password.value,
    };



    this.authService.loginUser(login).subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.showSuccess();
          switch (res.role) {
            case <any>'lcompany':
              this.router.navigate(['/leasingDash']);
              break;
            case <any>'agent':
              this.router.navigate(['/salesagentdash']);
              break;
            case <any>'admin':
              this.router.navigate(['/adminDashboard']);
              break;
          }
        }
      },
      error: (err) => {
        this.showError();
      },
    });
  }

  showSuccess() {
    this.toaster.success('Login Success !');
  }
  showError() {
    this.toaster.error('Invalid Username Or Password');
  }
}
