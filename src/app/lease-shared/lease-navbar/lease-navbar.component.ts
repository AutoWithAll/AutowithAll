import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-lease-navbar',
  templateUrl: './lease-navbar.component.html',
  styleUrls: ['./lease-navbar.component.css']
})
export class LeaseNavbarComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private tokenService : TokenStorageService) { }

  ngOnInit(): void {
  }


  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
}

logout(){
  this.tokenService.signOut();
}

}