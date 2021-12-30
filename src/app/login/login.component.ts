import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
//import { SocialAuthServiceService } from '../social-auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}

  // emailFormControl = new FormControl('', [Validators.required]);
  // passwordFormControl = new FormControl('', [Validators.required]);

  loginWithGoogle(): void {
    console.log('reached here');
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['main']));
    console.log('logged in');
  }

  ngOnInit(): void {}
}
