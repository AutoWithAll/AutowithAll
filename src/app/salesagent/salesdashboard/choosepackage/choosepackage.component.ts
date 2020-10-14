import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/service/package.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Payment } from 'src/app/models/payment';
import { AuthenticationService } from 'src/app/service/authentication.service';

interface InputData {
  name: string;
  value: string;
}

interface FormInputData {
  inputData: Array<InputData>;
}

interface PaymentData {
  merchant_id: string;
  return_url: string;
  cancel_url: string;
  notify_url: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  order_id: string;
  items: string;
  currency: string;
  recurrence: string;
  duration: string;
  amount: string;
  // custom_1: string;
  // custom_2: string;
  // hash:string
}
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-choosepackage',
  templateUrl: './choosepackage.component.html',
  styleUrls: ['./choosepackage.component.css'],
})
export class ChoosepackageComponent implements OnInit {

  isLoading = true;

  platinumDetails;
  goldDetails;
  silverDetails;

  id: string;
  price: string;

  payment: Payment;

  cid: number;
  date = new Date();
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
  orderId: string;

  constructor(
    private packService: PackageService,
    private dialogRef: MatDialogRef<ChoosepackageComponent>,
    private authenticationService: AuthenticationService
  ) {
    this.getPlatinum();
    this.getGold();
    this.getSilver();
  }

  ngOnInit(): void {
    this.authenticationService.getCurrentUser().subscribe(
      (data) => {
        this.cid = data.id;
        this.isLoading = false;
        this.getOrderId();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getOrderId() {
    this.year = this.date.getFullYear().toString();
    this.month = (this.date.getMonth() + 1).toString();
    this.day = this.date.getDate().toString();
    this.hour = this.date.getHours().toString();
    this.minute = this.date.getMinutes().toString();
    this.second = this.date.getSeconds().toString();
    this.orderId =
      this.cid +
      // this.year +
      // this.month +
      this.day +
      this.hour +
      this.minute +
      this.second;
  }

  getPlatinum() {
    this.packService.getPackageDetails(1).subscribe({
      next: (res) => {
        this.platinumDetails = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getGold() {
    this.packService.getPackageDetails(2).subscribe({
      next: (res) => {
        this.goldDetails = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getSilver() {
    this.packService.getPackageDetails(3).subscribe({
      next: (res) => {
        this.silverDetails = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  //Choose Plan
  choosePlan(id, price) {
    this.packService.SetpackageiD(id);
    this.packService.SetpackagePrice(price);
    window.sessionStorage.setItem('pid',id);
    this.id = id;
    this.price = price;
    console.log(id);
    this.dialogRef.close();
    this.doPayment(this.id, this.price);

     }

  doPayment(id: string, price: string) {
    const data = new Array<InputData>();
    data.push({ name: 'merchant_id', value: '1214203' });
    data.push({
      name: 'return_url',
      value: 'http://localhost:4200/salesagentdash',
    });
    data.push({ name: 'cancel_url', value: 'http://localhost:4200/payment' });
    data.push({ name: 'notify_url', value: 'http://localhost:4200/payment' });
    data.push({ name: 'first_name', value: 'akitha' });
    data.push({ name: 'last_name', value: 'nethmal' });
    data.push({ name: 'email', value: 'akitha@gmail.com' });
    data.push({ name: 'phone', value: '0767035046' });
    data.push({ name: 'address', value: 'asdasd,sdfasd,aad' });
    data.push({ name: 'city', value: 'galle' });
    data.push({ name: 'country', value: 'Sri Lanka' });
    data.push({ name: 'order_id', value: this.orderId });
    data.push({ name: 'items', value: 'Leasing plan Value' });
    data.push({ name: 'currency', value: 'LKR' });
    data.push({ name: 'amount', value: price });
    // data.push({ name: "custom_1", value: `${pd.custom_1}` });
    // data.push({ name: "custom_2", value: `${pd.custom_2}` });
    // data.push({ name: 'hash', value: `${pd.hash}` });

    const form = this.createForm({ inputData: data });
    // You have to create hidden(style="display:none") div element with this "submit-form-container" id (id="submit-form-container") in the component
    // <div style="display:none" id="submit-form-container"></div>
    document.querySelector('#submit-form-container').appendChild(form);
    form.submit();
  }

  createForm(data: FormInputData): HTMLFormElement {
    const form: HTMLFormElement = document.createElement('form');
    form.setAttribute('action', `https://sandbox.payhere.lk/pay/checkout`);
    form.setAttribute('method', 'POST');

    form.append(
      ...data.inputData.map((d) => {
        return this.createInput(d);
      })
    );

    return form;
  }

  createInput(data: InputData): HTMLInputElement {
    const input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', `${data.name}`);
    input.setAttribute('value', `${data.value}`);
    return input;
  }
}
