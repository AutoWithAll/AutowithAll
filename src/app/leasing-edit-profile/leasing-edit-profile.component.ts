import { Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-leasing-edit-profile',
  templateUrl: './leasing-edit-profile.component.html',
  styleUrls: ['./leasing-edit-profile.component.css']
})
export class LeasingEditProfileComponent {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor() { }

   
}
