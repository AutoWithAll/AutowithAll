import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-insurance-navbar',
  templateUrl: './insurance-navbar.component.html',
  styleUrls: ['./insurance-navbar.component.css']
})
export class InsuranceNavbarComponent implements OnInit {
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

logOut(){
  this.tokenService.signOut();

}

}
