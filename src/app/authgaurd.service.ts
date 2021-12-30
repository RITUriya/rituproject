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

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: SocialAuthService, private router: Router) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | boolean {
  //   let url: string = state.url;
  //   return true;
  // }

  // val: string | undefined;
  // checkLogin(url: string): true | UrlTree | undefined {
  //   console.log('Url: ' + url);
  //   // this.val = localStorage.getItem('isUserLoggedIn');

  //   if (
  //     localStorage.getItem('isUserLoggedIn') != null &&
  //     localStorage.getItem('isUserLoggedIn') == 'true'
  //   ) {
  //     if (url == '/login') this.router.parseUrl('/main');
  //     else return;
  //   }
  //   // } else {
  //   //   return this.router.parseUrl('/login');
  //   // }
  //   else {
  //     console.log('Correct');
  //     return;
  //   }
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    var isAuthenticated = this.authService.authState;
    console.log(isAuthenticated);
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
    return true;
    //return isAuthenticated;
  }
}
