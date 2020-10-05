import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Ad } from 'src/app/models/ad.model';

@Component({
  selector: 'app-postads',
  templateUrl: './postads.component.html',
  styleUrls: ['./postads.component.css']
})
export class SellerPostadsComponent implements OnInit {

  
  ad: Ad= new Ad();
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) {}

  get f1() {
     return (this.formGroup1.controls);
  }
  get f2() {
    return (this.formGroup2.controls);
  }
  get f3() {
    return (this.formGroup3.controls);
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
      description: ['', Validators.required]
    });

    }
    
    get dname(){
      return this.formGroup1.get('dname');
    }
    get dphn(){
      return this.formGroup1.get('dphn');
    }
    get demail(){
      return this.formGroup1.get('demail');
    }
    get dlocation(){
      return this.formGroup1.get('dlocation');
    }

    get vtitle(){
      return this.formGroup2.get('vtitle');
    }
    get vprice(){
      return this.formGroup2.get('vprice');
    }
    get vtype(){
      return this.formGroup2.get('vtype');
    }
    get vmanufac(){
      return this.formGroup2.get('vmanufac');
    }
    get vmodel(){
      return this.formGroup2.get('vmodel');
    }
    get vcondition(){
      return this.formGroup2.get('vcondition');
    }
    get vmodelyear(){
      return this.formGroup2.get('vmodelyear');
    }
    get vregyear(){
      return this.formGroup2.get('vregyear');
    }
    get vmileage(){
      return this.formGroup2.get('vmileage');
    }
    get venginecapacity(){
      return this.formGroup2.get('venginecapacity');
    }
    get vtransmission(){
      return this.formGroup2.get('vtransmission');
    }
    get vfuel(){
      return this.formGroup2.get('vfuel');
    }
    get vcolor(){
      return this.formGroup2.get('vcolor');
    }
    get description(){
      return this.formGroup3.get('description');
    }
    
    onSubmit(){
      const ad={
        dname:this.dname.value,
        dphn:this.dphn.value,
        demail:this.demail.value,
        dlocation:this.dlocation.value,

        vtitle:this.vtitle.value,
        vprice:this.vprice.value,
        vtype:this.vtype.value,
        vmanufac:this.vmanufac.value,
        vmodel:this.vmodel.value,
        vcondition:this.vcondition.value,
        vmodelyear:this.vmodelyear.value,
        vregyear:this.vregyear.value,
        vmileage:this.vmileage.value,
        venginecapacity:this.venginecapacity.value,
        vtransmission:this.vtransmission.value,
        vfuel:this.vfuel.value,
        vcolor:this.vcolor.value,

        description:this.description.value
        
      };
      console.log(ad);
      
    }



    
  }