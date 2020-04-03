import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './client/header/header.component';
import { NavigationComponent } from './client/navigation/navigation.component';
import { HomeComponent } from './client/home/home.component';
import { LandingComponent } from './client/home/landing/landing.component';
import { BestTrackComponent } from './client/home/best-track/best-track.component';
import { OurServicesComponent } from './client/home/our-services/our-services.component';
import { BookNowComponent } from './client/home/book-now/book-now.component';
import { SliderComponent } from './client/home/slider/slider.component';
import { MapComponent } from './client/map/map.component';
import { PricesComponent } from './client/prices/prices.component';
import { GameModesComponent } from './client/game-modes/game-modes.component';
import { GameModesDetailsComponent } from './client/game-modes/game-modes-details/game-modes-details.component';
import { ContactComponent } from './client/contact/contact.component';
import { MessageComponent } from './client/contact/message/message.component';
import { PackagesComponent } from './client/packages/packages.component';
import { PackageDetailComponent } from './client/packages/package-detail/package-detail.component';
import { BookingComponent } from './client/booking/booking.component';
import { DateComponent } from './client/booking/date/date.component';
import { CalendarComponent } from './client/booking/date/calendar/calendar.component';
import { DaysMatrixComponent } from './client/booking/date/calendar/days-matrix/days-matrix.component';
import { DayComponent } from './client/booking/date/calendar/days-matrix/day/day.component';
import { TimeTableComponent } from './client/booking/date/time-table/time-table.component';
import { InformationFormComponent } from './client/booking/information-form/information-form.component';
import { CheckComponent } from './client/booking/check/check.component';
import { ConfirmationComponent } from './client/booking/confirmation/confirmation.component';
import { FieldListComponent } from './client/map/field-list/field-list.component';
import { FieldDetailsComponent } from './client/map/field-details/field-details.component';
import { ServicesListComponent } from './client/map/services-list/services-list.component';
import { ServiceDetailsComponent } from './client/map/service-details/service-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    LandingComponent,
    BestTrackComponent,
    OurServicesComponent,
    BookNowComponent,
    SliderComponent,
    MapComponent,
    PricesComponent,
    GameModesComponent,
    GameModesDetailsComponent,
    ContactComponent,
    MessageComponent,
    PackagesComponent,
    PackageDetailComponent,
    BookingComponent,
    DateComponent,
    CalendarComponent,
    DaysMatrixComponent,
    DayComponent,
    TimeTableComponent,
    InformationFormComponent,
    CheckComponent,
    ConfirmationComponent,
    FieldListComponent,
    FieldDetailsComponent,
    ServicesListComponent,
    ServiceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
