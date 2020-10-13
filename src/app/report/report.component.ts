import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {Report} from '../models/report.model';
import {UserService  } from "../service/user.service";
 
import { ActivatedRoute, Router } from '@angular/router';
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
  adId:number
  constructor(private formBuilder: FormBuilder,private userService:UserService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.adId = params['id'];
    //   console.log(this.adId);

    // });
    this.adId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.adId);
    this.reportForm=this.formBuilder.group(
      {
        reason:['',[Validators.required]],
        f_name: ['', [Validators.required]],
        l_name: ['', [Validators.required]],
        t_number: [
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
  get f_name() {
    return this.reportForm.get('f_name');
  }
  get l_name() {
    return this.reportForm.get('l_name');
  }
  get t_number(){
    return this.reportForm.get('t_number');
  }
  get email(){
    return this.reportForm.get('email');
  }
  get message(){
    return this.reportForm.get('message');
  }
  onSubmit(){
    const report={
      reason:this.reason.value,
      f_name:this.f_name.value,
      l_name:this.l_name.value,
      t_number:this.t_number.value,
      email:this.email.value,
      message:this.message.value,
    };
    console.log(report);
    this.userService.postReport(report,this.adId).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
      console.log(err);
      }
      
    })
  }


}
