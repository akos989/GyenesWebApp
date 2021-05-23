import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SWIPER_CONFIG, SwiperConfigInterface, SwiperModule} from 'ngx-swiper-wrapper';
import {MatStepperModule} from '@angular/material/stepper';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CookieService} from 'ngx-cookie-service';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

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
import {PackagesComponent} from './client/packages/packages.component';
import {PackageDetailComponent} from './client/packages/package-detail/package-detail.component';
import {BookingComponent} from './client/booking/booking.component';
import {FieldListComponent} from './client/map/field-list/field-list.component';
import {FieldDetailsComponent} from './client/map/field-details/field-details.component';
import {ServiceDetailsComponent} from './client/map/service-details/service-details.component';
import {FooterComponent} from './shared/footer/footer.component';
import {SzechenyiComponent} from './shared/szechenyi/szechenyi.component';
import {PrivacyStatementComponent} from './shared/privacy-statement/privacy-statement.component';
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
import {CookieComponent} from './shared/cookie/cookie.component';
import {LoadingSpinnerComponent} from './shared/loading-spinner/loading-spinner.component';

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
    PackagesComponent,
    PackageDetailComponent,
    BookingComponent,
    FieldListComponent,
    FieldDetailsComponent,
    ServiceDetailsComponent,
    FooterComponent,
    SzechenyiComponent,
    PrivacyStatementComponent,
    PackageModalComponent,
    PlaceholderDirective,
    PageHeaderComponent,
    BookNowComponent,
    DescriptionCardComponent,
    CookieComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
