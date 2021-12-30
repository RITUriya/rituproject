import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  dataSource: any;
  constructor(private http: HttpClient, private cs: CommonServiceService) {}
  displayedColumns = ['id', 'user_id', 'title', 'body'];

  ngOnInit(): void {
    this.showUserDetails();
  }

  showUserDetails() {
    this.cs.getUserDetailsService().subscribe((data: any) => {
      this.dataSource = data.data;
      console.log(this.dataSource);
    });
  }
  userDetailslogout() {
    this.cs.logout();
  }
}
