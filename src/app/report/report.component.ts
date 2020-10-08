import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {Report} from '../models/report.model';
import {UserService  } from "../service/user.service";
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
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
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  report:Report=new Report();
  reportForm:FormGroup;

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.reportForm=this.formBuilder.group(
      {
        reason:['',[Validators.required]],
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        telephone: [
          '',
          [
            Validators.required,
            Validators.pattern('^((\\+94-?)|0)?[0-9]{10}$'),
          ],
        ],
        email: ['', [Validators.required]],
        message: ['', [Validators.required]],

      }
    );
  }
  get reason() {
    return this.reportForm.get('reason');
  }
  get first_name() {
    return this.reportForm.get('first_name');
  }
  get last_name() {
    return this.reportForm.get('last_name');
  }
  get telephone(){
    return this.reportForm.get('telephone');
  }
  get email(){
    return this.reportForm.get('email');
  }
  get message(){
    return this.reportForm.get('message');
  }
  onSubmit(){
    const report={
      reason:[this.reason.value],
      first_name:this.first_name.value,
      last_name:this.last_name.value,
      telephone:this.telephone.value,
      email:this.email.value,
      message:this.message.value,
    };
    console.log(report);
    this.userService.postReport(report,1).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
      console.log(err);
      }
      
    })
  }


}
