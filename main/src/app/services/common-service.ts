import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CommonService {
  constructor(private apollo: Apollo) {
  }
  private loginData = {bookingCode:'',familyName:''};
  
  setLogin(bookingCode: string, familyName: string) {
    this.loginData ={bookingCode, familyName} 
  }
  getLogin() {
    return this.loginData
  }
  queryBookingDetails(QUERY:any,bookingCode: string, familyName: string): Observable<any> {
    return this.apollo.query({
      query: QUERY,
      errorPolicy: 'all',
      variables: {
        bookingCode: bookingCode,
        familyName: familyName
      }
    });
  }
}
