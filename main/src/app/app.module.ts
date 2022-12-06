import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookingDetailsComponent } from './booking-details-page/booking-details-page.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { ReactiveFormsModule } from '@angular/forms';
import { ApolloModule } from 'apollo-angular';
import { CommonService } from './services/common-service';
import {ConvertToHourseMinutesPipe}  from './transformTime.pipe'

const routes: Routes = [
  {path: 'log-in', component: LogInPageComponent},
  {path: 'booking-details', component: BookingDetailsComponent},
  {path: '**', component: LogInPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LogInPageComponent,
    BookingDetailsComponent
  ],
  imports: [
    GraphQLModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CdkAccordionModule,
    ReactiveFormsModule,
    ApolloModule,
    ConvertToHourseMinutesPipe
  ],
  providers: [CommonService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
