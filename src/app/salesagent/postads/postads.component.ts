import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Ad } from 'src/app/models/ad.model';
import { UserService } from './../../service/user.service';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';

@Component({
  selector: 'app-postads',
  templateUrl: './postads.component.html',
  styleUrls: ['./postads.component.css'],
})
export class PostadsComponent implements OnInit {
  ad: Ad = new Ad();
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;
  isLinear = true;

  fileData: File = null;
  previewUrls: any[] = [];
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(
    private _formBuilder: FormBuilder,
    private adservice: UserService,
    private toast: ToastrService
  ) {}

  fileChangeEvent(fileInput: any) {
    this.fileData = fileInput.target.files[0];
    this.preview();
  }

  // onUpload() {
  //   this.adservice.uploadImage(this.fileData).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     },

  //     error: (err) => {
  //       console.log(err + "error Image");
  //     },
  //   });
  // }

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
      this.previewUrls.push(reader.result);
    };
  }

  removeImage(index) {
    console.log(index);
    let images = this.previewUrls ? [...this.previewUrls] : []

    if (index > -1 && index < images.length) {
      images.splice(index, 1);
    }

    this.previewUrls = images;
  }

  get f1() {
    return this.formGroup1.controls;
  }
  get f2() {
    return this.formGroup2.controls;
  }
  get f3() {
    return this.formGroup3.controls;
  }

  ngOnInit() {
    this.formGroup1 = this._formBuilder.group({
      dname: ['', Validators.required],
      dphn: ['', Validators.required],
      demail: ['', Validators.required],
      dlocation: ['', Validators.required],
    });
    this.formGroup2 = this._formBuilder.group({
      vtitle: ['', Validators.required],
      vprice: ['', Validators.required],
      vtype: ['', Validators.required],
      vmanufac: ['', Validators.required],
      vmodel: ['', Validators.required],
      vcondition: ['', Validators.required],
      vmodelyear: ['', Validators.required],
      vregyear: ['', Validators.required],
      vmileage: ['', Validators.required],
      venginecapacity: ['', Validators.required],
      vtransmission: ['', Validators.required],
      vfuel: ['', Validators.required],
      vcolor: ['', Validators.required],
    });
    this.formGroup3 = this._formBuilder.group({
      description: ['', Validators.required],
    });
  }

  get dname() {
    return this.formGroup1.get('dname');
  }
  get dphn() {
    return this.formGroup1.get('dphn');
  }
  get demail() {
    return this.formGroup1.get('demail');
  }
  get dlocation() {
    return this.formGroup1.get('dlocation');
  }

  get vtitle() {
    return this.formGroup2.get('vtitle');
  }
  get vprice() {
    return this.formGroup2.get('vprice');
  }
  get vtype() {
    return this.formGroup2.get('vtype');
  }
  get vmanufac() {
    return this.formGroup2.get('vmanufac');
  }
  get vmodel() {
    return this.formGroup2.get('vmodel');
  }
  get vcondition() {
    return this.formGroup2.get('vcondition');
  }
  get vmodelyear() {
    return this.formGroup2.get('vmodelyear');
  }
  get vregyear() {
    return this.formGroup2.get('vregyear');
  }
  get vmileage() {
    return this.formGroup2.get('vmileage');
  }
  get venginecapacity() {
    return this.formGroup2.get('venginecapacity');
  }
  get vtransmission() {
    return this.formGroup2.get('vtransmission');
  }
  get vfuel() {
    return this.formGroup2.get('vfuel');
  }
  get vcolor() {
    return this.formGroup2.get('vcolor');
  }
  get description() {
    return this.formGroup3.get('description');
  }

  showSuccess() {
    this.toast.success('Successfully Posted Your Ad');
  }
  showError() {
    this.toast.error('some Eror Found');
  }

  onSubmit() {
    const ad = {
      name: this.dname.value,
      t_number: this.dphn.value,
      email: this.demail.value,
      location: this.dlocation.value,
      title: this.vtitle.value,
      price: this.vprice.value,
      v_type: this.vtype.value,
      manufacturer: this.vmanufac.value,
      model: this.vmodel.value,
      v_condition: this.vcondition.value,
      m_year: this.vmodelyear.value,
      r_year: this.vregyear.value,
      mileage: this.vmileage.value,
      e_capacity: this.venginecapacity.value,
      transmission: this.vtransmission.value,
      fuel_type: this.vfuel.value,
      colour: this.vcolor.value,
      description: this.description.value,
      images : this.previewUrls,
      flag: 0,
    };


    console.log(ad);
    this.adservice.postAd(ad).subscribe({
      next: (res) => {
        console.log(res);
        this.showSuccess();
        this.formGroup3.reset();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
