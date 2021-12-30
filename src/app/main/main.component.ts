import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  rout: string;
  constructor(
    private router: Router,
    private ud: CommonServiceService,
    public socialAuthServive: SocialAuthService
  ) {
    this.rout = router.url;
    console.log(this.rout);
  }
  user = '1';
  ngOnInit(): void {
    localStorage.setItem('SessionUser', this.user);
  }

  onSubmit() {
    this.router.navigateByUrl('/albums');
    //  console.log('hi');
  }

  userDetailsOnUserDetails() {
    this.router.navigateByUrl('/userDetails');
  }
  mainlogout() {
    this.ud.logout();
  }
}
