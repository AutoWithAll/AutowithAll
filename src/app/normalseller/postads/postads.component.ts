import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Ad } from 'src/app/models/ad.model';
import { UserService } from 'src/app/service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-postads',
  templateUrl: './postads.component.html',
  styleUrls: ['./postads.component.css'],
})
export class SellerPostadsComponent implements OnInit {
  ad: Ad = new Ad();
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;
  fileData: any;
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

  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      console.log(reader.result);
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
      dname: ['jkjk', Validators.required],
      dphn: ['h', Validators.required],
      demail: ['asd', Validators.required],
      dlocation: ['fd', Validators.required],
    });
    this.formGroup2 = this._formBuilder.group({
      vtitle: ['ddd', Validators.required],
      vprice: ['dd', Validators.required],
      vtype: ['dd', Validators.required],
      vmanufac: ['dd', Validators.required],
      vmodel: ['ddd', Validators.required],
      vcondition: ['ddd', Validators.required],
      vmodelyear: ['dd', Validators.required],
      vregyear: ['ss', Validators.required],
      vmileage: ['ws', Validators.required],
      venginecapacity: ['w', Validators.required],
      vtransmission: ['wreg', Validators.required],
      vfuel: ['wer', Validators.required],
      vcolor: ['wre', Validators.required],
    });
    this.formGroup3 = this._formBuilder.group({
      description: ['wer', Validators.required],
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
      lStatus: 0,
      iStatus: 0
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
