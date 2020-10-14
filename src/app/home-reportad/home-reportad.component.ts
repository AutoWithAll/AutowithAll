import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home-reportad',
  templateUrl: './home-reportad.component.html',
  styleUrls: ['./home-reportad.component.css']
})
export class HomeReportadComponent implements OnInit {

  repotForm : FormGroup;
  reportAdId;

  constructor(
    private homeService : HomeService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) { }

  ngOnInit(){
    this.reportAdId = this.homeService.getReportAdId();
    console.log(this.reportAdId)
    this.repotForm = this.formBuilder.group({
      reason: ['', [Validators.required]],
      fname : ['' , [Validators.required]],
      lname : ['',[Validators.required]],
      tnumber : ['', [Validators.required]],
      email: ['' ,[Validators.required]],
      description : ['' , [Validators.required]]

    })
  }

  get fname(){
    return this.repotForm.get('fname');
  }
  get lname(){
    return this.repotForm.get('lname');
  }
  get tnumber(){
    return this.repotForm.get('tnumber');
  }
  get email(){
    return this.repotForm.get('email');
  }
  get description(){
    return this.repotForm.get('description');
  }
  get reason(){
    return this.repotForm.get('reason');
  }

  onSubmit(){
    const reportAd = {
      reason : this.reason.value,
      fname : this.fname.value,
      lname : this.lname.value,
      email : this.email.value,
      description : this.description.value
    };
    console.log(this.reportAdId)
    this.homeService.reportAd(reportAd , this.reportAdId).subscribe(
      res => {
        console.log(res);
      }
    )

  }

}
