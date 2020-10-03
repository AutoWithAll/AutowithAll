import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../service/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenStorageService.getToken() == null) {
      return true;
    } else {
      const role = this.tokenStorageService.getUser().roles;

      if (role == 'ROLE_ADMIN') {
        this.router.navigate(['/adminDashboard']);
      } else if (role == 'ROLE_AGENT') {
        this.router.navigate(['/salesagentdash']);
      } else if (role == 'ROLE_LCOMPANY') {
        this.router.navigate(['/leasingDash']);
      }else if (role == 'ROLE_USER') {
        this.router.navigate(['/sellerdash']);
      }else if (role == 'ROLE_ICOMPANY') {
        this.router.navigate(['/insuranceDash']);
      }
    }
  }
  
}
