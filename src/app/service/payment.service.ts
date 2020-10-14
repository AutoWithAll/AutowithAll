import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  public savePament(payment: Payment,uid: number,pid: number): Observable<any> {
    // console.log(pid);
    return this.http.post<any>(`http://localhost:8080/payment/${uid}/${pid}`, payment);
  }
  public getAll():Observable<any> {
    return this.http.get<any>(`http://localhost:8080/payment`);
  }

}
