import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './client/home/home.component';
import { PricesComponent } from './client/prices/prices.component';
import { MapComponent } from './client/map/map.component';
import { GameModesComponent } from './client/game-modes/game-modes.component';
import { BookingComponent } from './client/booking/booking.component';
import { ContactComponent } from './client/contact/contact.component';
import { SmallHeaderResolver } from './client/header/small-header.resolver';
import { SzechenyiComponent } from './shared/szechenyi/szechenyi.component';
import { PrivacyStatementComponent } from './shared/privacy-statement/privacy-statement.component';
import { ReservationResolver } from './client/booking/reservation.resolver';
import { PackageResolver } from './client/packages/package.resolver';
import { NoDateResolver } from './client/booking/date/no-date.resolver';
import { ConfirmGuard } from './client/booking/confirmation/confirm-guard.service';
import { ConfirmationComponent } from './client/booking/confirmation/confirmation.component';
import { BookingGuard } from './client/booking/can-booking-activate.service';
import { CurrentReservationResolver } from './client/booking/current-reservation-resolver.service';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent, resolve:{small: SmallHeaderResolver} },
  { path: 'map', component: MapComponent, resolve:{small: SmallHeaderResolver} },
  { path: 'prices', component: PricesComponent,
    resolve:{small: SmallHeaderResolver, PackageResolver}
  },
  { 
    path: 'game-modes',
    component: GameModesComponent,
    resolve:{small: SmallHeaderResolver}
  },
  { 
    path: 'booking',
    component: BookingComponent,
    canActivate: [BookingGuard],
    resolve:{
      small: SmallHeaderResolver, 
      PackageResolver,
      ReservationResolver,
      NoDateResolver
    }
  },
  {
    path: 'confirm', component: ConfirmationComponent,
    canActivate: [ConfirmGuard], resolve:{small: SmallHeaderResolver}
  },
  { path: 'contact', component: ContactComponent, resolve:{small: SmallHeaderResolver} },
  { path: 'szechenyi', component: SzechenyiComponent, resolve:{small: SmallHeaderResolver} },
  { path: 'privacy', component: PrivacyStatementComponent, resolve:{small: SmallHeaderResolver} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
