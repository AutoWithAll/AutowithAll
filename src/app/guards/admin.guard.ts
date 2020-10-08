import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../service/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.tokenStorageService.getUser().roles == 'ROLE_ADMIN') {
      return true;
    } else {
      this.router.navigateByUrl('');
    }
  }
}
