import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import {MatStepperModule} from '@angular/material/stepper';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CookieService} from 'ngx-cookie-service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './client/header/header.component';
import {NavigationComponent} from './client/navigation/navigation.component';
import {HomeComponent} from './client/home/home.component';
import {LandingComponent} from './client/home/landing/landing.component';
import {BestTrackComponent} from './client/home/best-track/best-track.component';
import {OurServicesComponent} from './client/home/our-services/our-services.component';
import {SliderComponent} from './client/home/slider/slider.component';
import {MapComponent} from './client/map/map.component';
import {PricesComponent} from './client/prices/prices.component';
import {GameModesComponent} from './client/game-modes/game-modes.component';
import {ContactComponent} from './client/contact/contact.component';
import {MessageComponent} from './client/contact/message/message.component';
import {PackagesComponent} from './client/packages/packages.component';
import {PackageDetailComponent} from './client/packages/package-detail/package-detail.component';
import {BookingComponent} from './client/booking/booking.component';
import {DateComponent} from './client/booking/date/date.component';
import {CalendarComponent} from './client/booking/date/calendar/calendar.component';
import {TimeTableComponent} from './client/booking/date/time-table/time-table.component';
import {InformationFormComponent} from './client/booking/information-form/information-form.component';
import {CheckComponent} from './client/booking/check/check.component';
import {ConfirmationComponent} from './client/booking/confirmation/confirmation.component';
import {FieldListComponent} from './client/map/field-list/field-list.component';
import {FieldDetailsComponent} from './client/map/field-details/field-details.component';
import {ServiceDetailsComponent} from './client/map/service-details/service-details.component';
import {FooterComponent} from './shared/footer/footer.component';
import {SzechenyiComponent} from './shared/szechenyi/szechenyi.component';
import {PrivacyStatementComponent} from './shared/privacy-statement/privacy-statement.component';
import {ChoosePackageComponent} from './client/booking/choose-package/choose-package.component';
import {DateStartComponent} from './client/booking/date/date-start/date-start.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {PackageModalComponent} from './client/packages/package-detail/modal/package-modal.component';
import {PlaceholderDirective} from './shared/placeholder.directive';
import {PageHeaderComponent} from './shared/page-header/page-header.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {BookNowComponent} from './client/book-now/book-now.component';
import {DescriptionCardComponent} from './shared/description-card/description-card.component';
import {ModalComponent} from './shared/backend-modal/modal/modal.component';
import {CookieComponent} from './shared/cookie/cookie.component';
import {LoadingSpinnerComponent} from './shared/loading-spinner/loading-spinner.component';
import {LoginComponent} from './shared/login/login.component';
import {OperatorHeaderComponent} from './operators/operator-header/operator-header.component';
import {MessagesComponent} from './operators/messages/messages.component';
import {ModalsComponent} from './operators/modals/modals.component';
import {MyProfileComponent} from './operators/my-profile/my-profile.component';
import {NoDatesComponent} from './operators/no-dates/no-dates.component';
import {OperatorPackagesComponent} from './operators/operator-packages/operator-packages.component';
import {ReservationsComponent} from './operators/reservations/reservations.component';
import {UsersComponent} from './operators/users/users.component';
import {OperatorComponent} from './operators/operators.component';
import {ReservationListComponent} from './operators/reservations/reservation-list/reservation-list.component';
import {ReservationDetailsComponent} from './operators/reservations/reservation-details/reservation-details.component';
import {ReservationDetailsModalComponent} from './operators/reservations/reservation-details-modal/reservation-details-modal.component';
import {ReservationAllComponent} from './operators/reservations/reservation-all/reservation-all.component';
import {ReservationNewComponent} from './operators/reservations/reservation-new/reservation-new.component';
import {AuthInterceptor} from './shared/login/auth-interceptor.service';
import {NotViewedReservationsComponent} from './operators/reservations/not-viewed-reservations/not-viewed-reservations.component';
import {NewMessagesComponent} from './operators/messages/new-messages/new-messages.component';
import {MessagesListComponent} from './operators/messages/messages-list/messages-list.component';
import {MessageDetailComponent} from './operators/messages/message-detail/message-detail.component';
import {MessageDetailModalComponent} from './operators/messages/message-detail/message-detail-modal/message-detail-modal.component';
import {NoDateListComponent} from './operators/no-dates/no-date-list/no-date-list.component';
import {NoDateStartComponent} from './operators/no-dates/no-date-start/no-date-start.component';
import {NoDateDetailComponent} from './operators/no-dates/no-date-detail/no-date-detail.component';
import {NoDateNewComponent} from './operators/no-dates/no-date-new/no-date-new.component';
import {NoDateDetailModalComponent} from './operators/no-dates/no-date-detail-modal/no-date-detail-modal.component';
import {ModalsListComponent} from './operators/modals/modals-list/modals-list.component';
import {ModalDetailComponent} from './operators/modals/modal-detail/modal-detail.component';
import {ModalDetailModalComponent} from './operators/modals/modal-detail-modal/modal-detail-modal.component';
import {ModalNewComponent} from './operators/modals/modal-new/modal-new.component';
import {ModalStartComponent} from './operators/modals/modal-start/modal-start.component';
import {PackageStartComponent} from './operators/operator-packages/package-start/package-start.component';
import {PackageTypeComponent} from './operators/operator-packages/package-type/package-type.component';
import {PackageNewComponent} from './operators/operator-packages/package-new/package-new.component';
import {PackageTypeNewComponent} from './operators/operator-packages/package-type-new/package-type-new.component';
import {OperatorPackageDetailComponent} from './operators/operator-packages/operator-package-detail/operator-package-detail.component';
import {
  OperatorPackageModalComponent
} from './operators/operator-packages/operator-package-detail/operator-package-modal/operator-package-modal.component';

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
    ModalComponent,
    CookieComponent,
    LoadingSpinnerComponent,
    LoginComponent,
    OperatorHeaderComponent,
    MessagesComponent,
    ModalsComponent,
    MyProfileComponent,
    NoDatesComponent,
    OperatorPackagesComponent,
    ReservationsComponent,
    UsersComponent,
    OperatorComponent,
    ReservationListComponent,
    ReservationDetailsComponent,
    ReservationDetailsModalComponent,
    ReservationAllComponent,
    ReservationNewComponent,
    NotViewedReservationsComponent,
    NewMessagesComponent,
    MessagesListComponent,
    MessageDetailComponent,
    MessageDetailModalComponent,
    NoDateListComponent,
    NoDateStartComponent,
    NoDateDetailComponent,
    NoDateNewComponent,
    NoDateDetailModalComponent,
    ModalsListComponent,
    ModalDetailComponent,
    ModalDetailModalComponent,
    ModalNewComponent,
    ModalStartComponent,
    PackageStartComponent,
    PackageTypeComponent,
    PackageNewComponent,
    PackageTypeNewComponent,
    OperatorPackageDetailComponent,
    OperatorPackageModalComponent
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
    CookieService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
