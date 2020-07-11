import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-postads',
  templateUrl: './postads.component.html',
  styleUrls: ['./postads.component.css']
})
export class PostadsComponent implements OnInit {

  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup1 = this._formBuilder.group({
      ctrl1: ['', Validators.required],
      ctrl2: ['', Validators.required],
      ctrl3: ['', Validators.required],
      ctrl4: ['', Validators.required],
    });
    this.formGroup2 = this._formBuilder.group({
      sctrl2: ['', Validators.required],
      sctrl3: ['', Validators.required],
      sctrl4: ['', Validators.required],
      sctrl5: ['', Validators.required],
      sctrl6: ['', Validators.required],
      sctrl7: ['', Validators.required],
      sctrl8: ['', Validators.required],
      sctrl9: ['', Validators.required],
      sctrl10: ['', Validators.required],
      sctrl11: ['', Validators.required],
      sctrl12: ['', Validators.required],
    });
    this.formGroup3 = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    
  }

  

}
