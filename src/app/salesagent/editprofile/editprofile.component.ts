import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { __rest } from 'tslib';


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
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
})
export class EditprofileComponent implements OnInit {

  isLoading = true;



  editForm: FormGroup;
  Securityform: FormGroup;
  userDetail: User = <User>{};


  fileData: File = null;
  previewUrls;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(
    fb: FormBuilder,
    private userService: UserService,
    private tokenService: TokenStorageService,
    private authService : AuthenticationService
  ) {
    console.log("construcror")
    
    this.editForm = fb.group(
      {
        fname: ['', [Validators.required]],
        lname: ['', [Validators.required]],
        t_number: [
          '',
          [
            Validators.required,
            Validators.pattern('^((\\+94-?)|0)?[0-9]{10}$'),
          ],
        ],
        adress: ['', [Validators.required]],
        cur_password: ['', [Validators.required]],
        new_password: ['', [Validators.required, Validators.minLength(6)]],
        confirm_password: ['', [Validators.required]],
      }
    );
    this.Securityform = fb.group({
      cur_password: ['', [Validators.required]],
      new_password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required]],
    },
    {
      validator: MustMatch('new_password', 'confirm_password'),
    });
  }

  fileChangeEvent(fileInput: any) {
    this.fileData = fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      console.log(reader.result)
      this.previewUrls = reader.result;
    };
  }

  removeImage() {

    this.previewUrls.splice(0);
    
  }

  ngOnInit(){
    
     this.authService.getCurrentUser().subscribe(res => {
      this.userDetail = res;
      console.log(this.userDetail);
      console.log(res);
      this.isLoading =false;
      this.editForm.patchValue({
        fname: this.userDetail.fname,
        lname: this.userDetail.lname,
        t_number: this.userDetail.tnumber,
        adress: this.userDetail.address,
      });
      })

      
    

    
 
    
  }

  //##################promise

  

  //#############promise

  get fname() {
    return this.editForm.get('fname');
  }

  get lname() {
    return this.editForm.get('lname');
  }
  get t_number() {
    return this.editForm.get('t_number');
  }
  get adress() {
    return this.editForm.get('adress');
  }
  get new_password() {
    return this.Securityform.get('new_password');
  }
  get cur_password() {
    return this.Securityform.get('cur_password');
  }
  get confirm_password() {
    return this.Securityform.get('confirm_password');
  }

  onSubmit() {
    console.log('workng submit editprofile');
    const editform = {
      fname: this.fname.value,
      lname: this.lname.value,
      username : this.userDetail.username,
      tnumber : this.t_number.value,
      nic : this.userDetail.nic,
      password: this.userDetail.password,
      role :this.userDetail.role,
      cName :this.userDetail.cName,
      address :this.adress.value,
      regNum :this.userDetail.regNum
    };
    console.log(this.cur_password.value);

    this.userService.editProfile(editform).subscribe({
      next: (res) => {
        console.log(res);
        this.userService.showSuccess(res);
      },
      error: (err) => {
        console.log(err);
        this.userService.shoeErr(err);
      },
    });
  }
  onChangePassword() {
    const sec_data = {
      fname : this.userDetail.fname,
      lname : this.userDetail.lname,
      username : this.userDetail.username,
      tnumber : this.userDetail.tnumber,
      nic : this.userDetail.nic,
      password: this.new_password.value,
      role :this.userDetail.role,
      cName :this.userDetail.cName,
      address :this.userDetail.address,
      regNum :this.userDetail.regNum,
      imgId : this.userDetail.imgId
    }
    this.userService.changePassword(sec_data,this.cur_password.value).subscribe({next : (res) =>{
      this.userService.showSuccess(res);
    },
  error : (err) =>{
    this.userService.shoeErr(err);
  }})
  window.location.reload();
  }
  deletePhoto(){

  }
  submitPhoto(){
    this.userService.changePhoto(this.previewUrls).subscribe(res => {
      console.log(res);
    })
  }
}
