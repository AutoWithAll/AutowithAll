import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-insurance-sidebar',
  templateUrl: './insurance-sidebar.component.html',
  styleUrls: ['./insurance-sidebar.component.css']
})
export class InsuranceSidebarComponent implements OnInit {
  @Output() public childEvent =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  public fireEvent(x: number){
    this.childEvent.emit(x);
  }

}
