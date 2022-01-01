import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { CommonServiceService } from 'src/app/common-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  rout: string;
  constructor(
    private router: Router,
    private ud: CommonServiceService,
    public socialAuthServive: SocialAuthService
  ) {
    this.rout = router.url;
    console.log(this.rout);
  }
  mainlogout() {
    this.ud.logout();
  }

  ngOnInit(): void {}
}
