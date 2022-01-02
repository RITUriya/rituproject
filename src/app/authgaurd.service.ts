import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { SocialAuthService } from 'angularx-social-login/socialauth.service';
import { any } from 'joi';
import { Observable } from 'rxjs';
import { CommonServiceService } from './common-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private comService: CommonServiceService,
    private router: Router
  ) {}

  canActivate() {
    if (this.comService.gettoken() != null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      // return false;
    }
    return false;
  }
}
