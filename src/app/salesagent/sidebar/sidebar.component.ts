import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-agentsidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  user : User;

constructor(
  private breakpointObserver: BreakpointObserver, 
  private tokenStorageService : TokenStorageService,
  private router: Router
  ) {}

ngOnInit(){
  this.user = this.tokenStorageService.getUser();
}

logout(){
  console.log("logout");
  this.tokenStorageService.signOut();
  this.router.navigateByUrl('/login');
}

}
