import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
// import { MaterialModule } from '@angular/material'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  data = [
    {
      img :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jLXzmSlWvqTQfAThdKlqwQHaEK%26pid%3DApi&f=1",
      name:"BMW i8",
      date:"2018/03/05",
      from: "Colombo",
      year:"2018",
      price: "1,000,000"
    },
    {
      img :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sY0mdfPhrpzC34tGFmTm6gHaEK%26pid%3DApi&f=1",
      name:"Mustang",
      date:"2019/05/22",
      from: "Colombo",
      year:"2019",
      price: "1,540,000"
    },
    {
      img :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.eo05gBUIgP0A-fozya348AHaFS%26pid%3DApi&f=1",
      name:"Audi A4",
      date:"2020/01/08",
      from: "Colombo",
      year:"2018",
      price: "1,635,000"
    },
    {
      img :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qVIqjfzT8T6d0etdS1ybMQHaFj%26pid%3DApi&f=1",
      name:"Porche",
      date:"2020/01/08",
      from: "Colombo",
      year:"2018",
      price: "1,635,000"
    }
  ];
  }



