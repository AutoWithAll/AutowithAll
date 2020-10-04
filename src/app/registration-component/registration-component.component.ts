import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ErrorStateMatcher } from '@angular/material/core';

import { User } from '../models/user.model';

import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css'],
})
export class RegistrationComponentComponent implements OnInit {
  user: User = new User();
  registerForm: FormGroup;
  error = null;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private toastr: ToastrService,
    private router : Router
  ) {}
  get f() {
    return this.registerForm.controls;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        fname: ['', [Validators.required]],
        lname: ['', [Validators.required]],
        username: ['', [Validators.required, Validators.email]],
        tnumber: [
          '',
          [
            Validators.required,
            Validators.pattern('^((\\+94-?)|0)?[0-9]{10}$'),
          ],
        ],
        nic: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        cpassword: ['', [Validators.required]],
        role: ['', [Validators.required]],
      },
      {
        validator: MustMatch('password', 'cpassword'),
      }
    );
  }


  get fname() {
    return this.registerForm.get('fname');
  }
  get lname() {
    return this.registerForm.get('lname');
  }
  get username() {
    return this.registerForm.get('username');
  }
  get tnumber() {
    return this.registerForm.get('tnumber');
  }
  get nic() {
    return this.registerForm.get('nic');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get cpassword() {
    return this.registerForm.get('cpassword');
  }
  get role() {
    return this.registerForm.get('role');
  }

  onSubmit() {
    const user = {
      fname: this.fname.value,
      lname: this.lname.value,
      username: this.username.value,
      tnumber: this.tnumber.value,
      nic: this.nic.value,
      password: this.password.value,
      role: [this.role.value],
    };
    console.log(user);
    this.auth.registerUser(user).subscribe({
      next: (res) => {
        console.log(res);
        this.toastr.success("User Registerd Successfully");
        this.router.navigateByUrl('/login');
      },
      error: (err) => {
        if (err && err.error) {
          this.error = err.error.message;
          this.toastr.error(err.error.message);
        }
        console.log(err);
      },
    });
  }
}
