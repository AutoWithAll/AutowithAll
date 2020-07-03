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
import { UserService } from '../service/user.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private auth: UserService,
    private toastr: ToastrService
  ) {}
  get f() {
    return this.registerForm.controls;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        fname: ['', [Validators.required]],
        lname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
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

  showSuccess() {
    this.toastr.success('Register Success !');
  }

  get fname() {
    return this.registerForm.get('fname');
  }
  get lname() {
    return this.registerForm.get('lname');
  }
  get email() {
    return this.registerForm.get('email');
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
      email: this.email.value,
      tnumber: this.tnumber.value,
      nic: this.nic.value,
      password: this.password.value,
      role: this.role.value,
    };

    this.auth.register(user);
    this.registerForm.reset();
    this.showSuccess();
  }
}
