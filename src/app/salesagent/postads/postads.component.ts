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
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  base64Data: any;

  constructor(
    private _formBuilder: FormBuilder,
    private adservice: UserService,
    private toast: ToastrService
  ) {}

  getBase64(event) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //me.modelvalue = reader.result;
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

  fileProgress(fileInput) {
    //this.getBase64(fileInput);
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
      this.previewUrl = reader.result;
      //console.log("type" + this.previewUrl)
    };
    
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
      //image:['', Validators.required],
      description: ['', Validators.required],
    });
  }

  
  // get image() {
  //   return this.formGroup3.get('image');
  // }
  

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

  public image;

 getimage(){
   console.log("1")
   this.adservice.getimage(this.previewUrl).subscribe(res => {this.image = res})
  }

  onSubmit() {
    const ad = {
      dname: this.dname.value,
      dphn: this.dphn.value,
      demail: this.demail.value,
      dlocation: this.dlocation.value,
      vtitle: this.vtitle.value,
      vprice: this.vprice.value,
      vtype: this.vtype.value,
      vmanufac: this.vmanufac.value,
      vmodel: this.vmodel.value,
      vcondition: this.vcondition.value,
      vmodelyear: this.vmodelyear.value,
      vregyear: this.vregyear.value,
      vmileage: this.vmileage.value,
      venginecapacity: this.venginecapacity.value,
      vtransmission: this.vtransmission.value,
      vfuel: this.vfuel.value,
      vcolor: this.vcolor.value,
      description: this.description.value,
      imgname: this.fileData.name
    };

    console.log(this.fileData);
    
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
    console.log(this.fileData)
    this.adservice.image(this.fileData);
    this.getimage();
  }
}
