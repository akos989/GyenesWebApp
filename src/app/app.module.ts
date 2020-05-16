import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FacebookModule } from 'ngx-facebook';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './client/header/header.component';
import { NavigationComponent } from './client/navigation/navigation.component';
import { HomeComponent } from './client/home/home.component';
import { LandingComponent } from './client/home/landing/landing.component';
import { BestTrackComponent } from './client/home/best-track/best-track.component';
import { OurServicesComponent } from './client/home/our-services/our-services.component';
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
import { TimeTableComponent } from './client/booking/date/time-table/time-table.component';
import { InformationFormComponent } from './client/booking/information-form/information-form.component';
import { CheckComponent } from './client/booking/check/check.component';
import { ConfirmationComponent } from './client/booking/confirmation/confirmation.component';
import { FieldListComponent } from './client/map/field-list/field-list.component';
import { FieldDetailsComponent } from './client/map/field-details/field-details.component';
import { ServicesListComponent } from './client/map/services-list/services-list.component';
import { ServiceDetailsComponent } from './client/map/service-details/service-details.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SzechenyiComponent } from './shared/szechenyi/szechenyi.component';
import { PrivacyStatementComponent } from './shared/privacy-statement/privacy-statement.component';
import { ChoosePackageComponent } from './client/booking/choose-package/choose-package.component';
import { DateStartComponent } from './client/booking/date/date-start/date-start.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { PackageModalComponent } from './client/packages/package-detail/modal/package-modal.component';
import { PlaceholderDirective } from './shared/placeholder.directive';
import { PageHeaderComponent } from './shared/page-header/page-header.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BookNowComponent } from './client/book-now/book-now.component';
import { DescriptionCardComponent } from './shared/description-card/description-card.component';
import { TrenchMapComponent } from './client/map/trench-map/trench-map.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    LandingComponent,
    BestTrackComponent,
    OurServicesComponent,
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
    TimeTableComponent,
    InformationFormComponent,
    CheckComponent,
    ConfirmationComponent,
    FieldListComponent,
    FieldDetailsComponent,
    ServicesListComponent,
    ServiceDetailsComponent,
    FooterComponent,
    SzechenyiComponent,
    PrivacyStatementComponent,
    ChoosePackageComponent,
    DateStartComponent,
    PackageModalComponent,
    PlaceholderDirective,
    PageHeaderComponent,
    BookNowComponent,
    DescriptionCardComponent,
    TrenchMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [
    { 
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
