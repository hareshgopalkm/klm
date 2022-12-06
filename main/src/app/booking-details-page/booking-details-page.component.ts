import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../../graphql/generated';
import { CommonService } from '../services/common-service';
import { FULL_BOOKING } from './booking-details-page.query';
import * as resources from '../../assets/resources/labels';

@Component({
  selector: 'app-booking-details-page',
  templateUrl: './booking-details-page.component.html',
  styleUrls: ['./booking-details-page.component.scss']
})

export class BookingDetailsComponent implements OnInit {
  labels = resources.labels;
  bookingData: Booking | undefined;
  constructor(
    private readonly router: Router, private commonService: CommonService) {
  }

  ngOnInit() {
    const loginData = this.commonService.getLogin();
    this.commonService.queryBookingDetails(FULL_BOOKING, loginData.bookingCode, loginData.familyName)
      .subscribe(response => {
        if (response.errors?.length || !response.data) {
          this.router.navigate(['log-in']);
        } else {
          this.bookingData = response.data.getBooking;
        }
      });
  }

  getDuration(time: string) {

  }
}
