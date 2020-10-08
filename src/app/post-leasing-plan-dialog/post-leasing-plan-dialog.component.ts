import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Lease } from '../models/lease.model';
import { UserService } from '../service/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-post-leasing-plan-dialog',
  templateUrl: './post-leasing-plan-dialog.component.html',
  styleUrls: ['./post-leasing-plan-dialog.component.css'],
})
export class PostLeasingPlanDialogComponent implements OnInit {
  lease: Lease = new Lease();
  leaseForm: FormGroup;

  constructor(
    private form_Builder: FormBuilder,
    private auth: UserService,
    private toastr: ToastrService,
    public dialogbox: MatDialogRef<PostLeasingPlanDialogComponent>
  ) {}

  get f() {
    return this.leaseForm.controls;
  }

  ngOnInit() {
    this.leaseForm = this.form_Builder.group({
      ramount: ['', [Validators.required]],
      years: ['', [Validators.required]],
      interest: ['', [Validators.required]],
      iamount: ['', [Validators.required]],
    });
  }

  showSuccess() {
    this.toastr.success('Leasing Plan Submitted !');
  }

  get ramount() {
    return this.leaseForm.get('ramount');
  }

  get years() {
    return this.leaseForm.get('years');
  }

  get interest() {
    return this.leaseForm.get('interest');
  }

  get iamount() {
    return this.leaseForm.get('iamount');
  }
  onClose() {
    this.dialogbox.close();
  }

  onSubmit() {
    console.log('Working');

    const lease = {
      ramount: this.ramount.value,
      years: this.years.value,
      interest: this.interest.value,
      iamount: this.iamount.value,
    };

    console.log(lease);
    this.auth.postLease(lease).subscribe((res) => {
      console.log(res);
      this.showSuccess();
    });
    this.leaseForm.reset();
    
  }
}
