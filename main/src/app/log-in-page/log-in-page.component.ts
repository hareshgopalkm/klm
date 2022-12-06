import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { CommonService } from '../services/common-service';
import * as resources from '../../assets/resources/labels';

@Component({
  selector: 'app-check-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})

export class LogInPageComponent {
  loginForm: FormGroup = new FormGroup({
    bookingCode: new FormControl(''),
    familyName: new FormControl('')
  });
  labels = resources.labels;
  retrieveError: string = '';
  get bookingCode() {
    return this.loginForm.get('bookingCode');
  }
  get familyName() {
    return this.loginForm.get('familyName');
  }

  QUERY_BOOKING = gql`
  query BookingQuery($bookingCode: String!, $familyName: String!) {
    getBooking(bookingCode: $bookingCode, familyName: $familyName) {
      bookingCode
    }
  }`;

  constructor(
    private readonly router: Router, private apolloClient: Apollo, private commonService: CommonService) {
  }

  checkLogin(): void {
    this.retrieveError = ''
    if (this.loginForm.valid) {
      const bookingCode = this.loginForm.value.bookingCode;
      const familyName = this.loginForm.value.familyName;
      this.retrieveError = '';
      this.commonService.queryBookingDetails(this.QUERY_BOOKING, this.loginForm.value.bookingCode,
        this.loginForm.value.familyName).pipe(catchError((err) => {
          this.retrieveError = 'Some error occured';
          throw err;
        })).subscribe(response => {
          if (response.errors?.length) {
            this.retrieveError = 'Invalid Credentials'
            setTimeout(() => { this.retrieveError = '' }, 3000);
          } else {
            this.commonService.setLogin(bookingCode, familyName)
            this.router.navigate(['booking-details']);
          }
        });
    }
  }


}
