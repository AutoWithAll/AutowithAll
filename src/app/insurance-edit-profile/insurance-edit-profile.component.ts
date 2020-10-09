import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { UserService } from '../service/user.service';
import { TokenStorageService } from '../service/token-storage.service';
import { AuthenticationService } from '../service/authentication.service';
import { Ad } from '../models/ad.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-insurance-edit-profile',
  templateUrl: './insurance-edit-profile.component.html',
  styleUrls: ['./insurance-edit-profile.component.css'],
})
export class InsuranceEditProfileComponent implements OnInit {
  editForm: FormGroup;
  
  userDetail: User = <User>{};

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(
    fb: FormBuilder,
    private userService: UserService,
    private tokenService: TokenStorageService,
    private authService: AuthenticationService
  ) {
    this.editForm = fb.group({
      fname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      t_number: [
        '',
        [Validators.required, Validators.pattern('^((\\+94-?)|0)?[0-9]{10}$')],
      ],
      username: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.userDetail = this.tokenService.getUser();
    // console.log(this.adDetail.imgId)
    // console.log(this.userDetail)
    // this.authService.getCurrentUser().subscribe(res => {
    //   this.userDetail = res;
    // })

    this.editForm.patchValue({
      fname: this.userDetail.fname,
      username: this.userDetail.username,
      t_number: this.userDetail.tnumber,
      address: this.userDetail.address,
    });
  }

  get fname() {
    return this.editForm.get('fname');
  }
  get t_number() {
    return this.editForm.get('t_number');
  }
  get address() {
    return this.editForm.get('address');
  }
  get username() {
    return this.editForm.get('username');
  }
  onSubmit() {
    console.log('workng submit editprofile');
    const editform = {
      fname: this.fname.value,
      tnumber: this.t_number.value,
      address: this.address.value,
      username: this.username.value,
      lname: this.userDetail.lname,
      nic: this.userDetail.nic,
      password:this.userDetail.password,
      role:this.userDetail.role,
      cName:this.userDetail.cName,
      regNum:this.userDetail.regNum,
      imgId:this.userDetail.imgId
    };
    console.log(editform )
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
}
