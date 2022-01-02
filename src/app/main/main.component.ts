import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { NumberLiteralType } from 'typescript';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  [x: string]: any;
  center: google.maps.LatLngLiteral = { lat: 25.5941, lng: 85.1376 };
  zoom = 12;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    disableDefaultUI: false,
    maxZoom: 15,
    minZoom: 8,
  };
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  // mapOptions: google.maps.MapOptions = {
  //   center: { lat: 25.5941, lng: 25.5941 }, //{ lat: 38.9987208, lng: -77.2538699 },
  //   zoom: 14,
  // };
  marker = {
    position: { lat: 25.5941, lng: 85.1376 }, // { lat: 38.9987208, lng: -77.2538699 },
  };

  rout: string;
  constructor(
    private router: Router,
    private ud: CommonServiceService,
    public socialAuthServive: SocialAuthService
  ) {
    this.rout = router.url;
    console.log(this.rout);
  }

  ngOnInit(): void {
    this.findMe();
  }
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  showPosition(position: GeolocationPosition) {
    this['currentLat'] = position.coords.latitude;
    this['currentLong'] = position.coords.longitude;

    let location = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    this['map'].panTo(location);

    if (!this['marker']) {
      this['marker'] = new google.maps.Marker({
        position: location,
        map: this['map'],
        title: 'Got you!',
      });
    } else {
      this['marker'].setPosition(location);
    }
  }
  // showTrackingPosition(position: {
  //   coords: {
  //     latitude: number | google.maps.LatLng | google.maps.LatLngLiteral;
  //     longitude: number | boolean | null | undefined;
  //   };
  // }) {
  //   console.log(
  //     `tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`
  //   );
  //   this['currentLat'] = position.coords.latitude;
  //   this['currentLong'] = position.coords.longitude;

  //   let location = new google.maps.LatLng(
  //     position.coords.latitude,
  //     position.coords.longitude
  //   );
  //   this['map'].panTo(location);

  //   if (!this['marker']) {
  //     this['marker'] = new google.maps.Marker({
  //       position: location,
  //       map: this['map'],
  //       title: 'Got you!',
  //     });
  //   } else {
  //     this['marker'].setPosition(location);
  //   }
  //}
  registrationOnUserDetails() {}

  userDetailsOnUserDetails() {
    this.router.navigateByUrl('/userDetails');
  }
}
