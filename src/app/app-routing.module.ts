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
import { LoginComponent } from './shared/login/login.component';
import { OperatorComponent } from './operators/operators.component';
import { ReservationsComponent } from './operators/reservations/reservations.component';
import { MessagesComponent } from './operators/messages/messages.component';
import { UsersComponent } from './operators/users/users.component';
import { NoDatesComponent } from './operators/no-dates/no-dates.component';
import { ModalsComponent } from './operators/modals/modals.component';
import { MyProfileComponent } from './operators/my-profile/my-profile.component';
import { OperatorPackagesComponent } from './operators/operator-packages/operator-packages.component';
import { OperatorsReservationResolver } from './operators/reservations/operators-reservation-resolver.service';
import { ReservationAllComponent } from './operators/reservations/reservation-all/reservation-all.component';
import { ReservationNewComponent } from './operators/reservations/reservation-new/reservation-new.component';
import { NewReservationResolver } from './operators/reservations/reservation-new/new-reservation-resolver.service';
import { AuthGuard } from './shared/login/auth-guard.service';
import { CurrentUserResolver } from './shared/login/current-user-resolver.service';

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
  { path: 'privacy', component: PrivacyStatementComponent, resolve:{small: SmallHeaderResolver} },
  {
    path: 'login', component: LoginComponent,
    resolve:{small: SmallHeaderResolver},
    canActivate: [AuthGuard]
  },
  { 
        path: 'operators', component: OperatorComponent,
        resolve: {small: SmallHeaderResolver, currentUser: CurrentUserResolver},
        canActivate: [AuthGuard],
        children: [
            { 
              path: '', component: ReservationsComponent,
              resolve: { OperatorsReservationResolver, PackageResolver },
              children: [
                { path: '', pathMatch: 'full', component: ReservationAllComponent},
                {
                  path: 'new', component: ReservationNewComponent,
                  resolve: {
                    ReservationResolver,
                    NoDateResolver,
                    NewReservationResolver
                  }
                },
                {
                  path: ':id/edit', component: ReservationNewComponent,
                  resolve: {
                    ReservationResolver,
                    NoDateResolver,
                    NewReservationResolver
                  }
                }
              ]
            },
            { path: 'messages', component: MessagesComponent },
            {
              path: 'packages', component: OperatorPackagesComponent,
              resolve: { PackageResolver }
            },
            { path: 'users', component: UsersComponent },
            { path: 'no-dates', component: NoDatesComponent },
            { path: 'pop-ups', component: ModalsComponent },
            { path: 'my-profile', component: MyProfileComponent },
            
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
