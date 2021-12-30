import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

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

  getUserDetailsService() {
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
