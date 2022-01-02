import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  userDetails = 'https://gorest.co.in/public/v1/posts';
  createNewUser = 'https://gorest.co.in/public/v1/users';
  updateUser = 'https://gorest.co.in/public/v1/comments';
  deleteUser = 'https://gorest.co.in/public/v1/todos';

  constructor(
    private http: HttpClient,
    private router: Router,
    public socialAuthServive: SocialAuthService
  ) {}
  isLoggedIn() {
    this.socialAuthServive.authState.subscribe((data) => data);
  }
  loginData: any;
  userDetail = 1;
  async gettoken() {
    await new Promise((f) => setTimeout(f, 1000));
    this.socialAuthServive.authState.subscribe((data) => {
      this.loginData = data;
    });
    console.log(this.loginData);
    if (this.loginData != null && this.loginData != 'undefined') {
      await new Promise((f) => setTimeout(f, 1000));
      console.log(this.userDetail);
      return this.userDetail;
    }
    return;
  }

  getUserDetailsService() {
    // console.log(localStorage.getItem('SessionUser'));
    return this.http.get(this.userDetails);
  }
  postUserdeatilsService() {
    // return this.http.post(this.createNewUser);
  }
  updateUserDetailsService() {
    //return this.http.put(this.updateUserDetails);
  }

  deleteUserDetails() {
    return this.http.delete(this.deleteUser);
  }

  logout(): void {
    this.socialAuthServive
      .signOut()
      .then(() => this.router.navigate(['login']));
    console.log(localStorage.getItem('this.socialAuthServive.initState'));
    setTimeout(() => {
      console.log('timeout is working'), 1000;
    });
    console.log(navigator.platform);
    // console.log(window.localStorage.setItem('name', 'ritu'));
    console.log(window.localStorage.getItem('name'));
    console.log(window.localStorage.clear());
    //console.log(window.close());
  }
}
