import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  releventAd;

  constructor() { }

  setId(data){
    this.releventAd = data;
  }
  getId(){
    return this.releventAd;
  }
}
