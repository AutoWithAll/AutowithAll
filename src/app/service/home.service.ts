import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  releventAd;
  releventImg;

  constructor() { }

  setId(data){
    this.releventAd = data;
  }
  getId(){
    return this.releventAd;
  }
  setImg(data){
    this.releventImg = data;
  }
  getImg(){
    return this.releventImg;
  }
}
