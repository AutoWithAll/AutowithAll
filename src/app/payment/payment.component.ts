import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  paymentdatra: PaymentData;

  ngOnInit(): void {
  }

  checkout(){

    this.doPayment(this.paymentdatra);
  }

  doPayment(pd: PaymentData) {
    const data = new Array<InputData>();
    data.push({ name: 'merchant_id', value: '1214203' });
    data.push({ name: 'return_url', value: 'http://localhost:4200/payment' });
    data.push({ name: 'cancel_url', value: 'http://localhost:4200/payment' });
    data.push({ name: 'notify_url', value: 'http://localhost:4200/payment' });
    data.push({ name: 'first_name', value: 'akitha' });
    data.push({ name: 'last_name', value: 'nethmal' });
    data.push({ name: 'email', value: 'akitha@gmail.com' });
    data.push({ name: 'phone', value: '0767035046' });
    data.push({ name: 'address', value: 'asdasd,sdfasd,aad' });
    data.push({ name: 'city', value: 'galle' });
    data.push({ name: 'country', value: 'Sri Lanka' });
    data.push({ name: 'order_id', value: '123456' });
    data.push({ name: 'items', value: 'Leasing plan Value' });
    data.push({ name: 'currency', value: 'LKR' });
    data.push({ name: 'amount', value: '500' });
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
