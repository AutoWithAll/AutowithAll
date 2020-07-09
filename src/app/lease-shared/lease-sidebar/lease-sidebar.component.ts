import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-lease-sidebar',
  templateUrl: './lease-sidebar.component.html',
  styleUrls: ['./lease-sidebar.component.css']
})
export class LeaseSidebarComponent implements OnInit {

  @Output() public childEvent =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public fireEvent(x: number){
    this.childEvent.emit(x);
  }
}
