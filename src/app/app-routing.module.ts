import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './client/home/home.component';
import { PricesComponent } from './client/prices/prices.component';
import { MapComponent } from './client/map/map.component';
import { GameModesComponent } from './client/game-modes/game-modes.component';
import { GameModesDetailsComponent } from './client/game-modes/game-modes-details/game-modes-details.component';
import { BookingComponent } from './client/booking/booking.component';
import { DateComponent } from './client/booking/date/date.component';
import { InformationFormComponent } from './client/booking/information-form/information-form.component';
import { ConfirmationComponent } from './client/booking/confirmation/confirmation.component';
import { CheckComponent } from './client/booking/check/check.component';
import { ContactComponent } from './client/contact/contact.component';
import { SmallHeaderResolver } from './client/header/small-header.resolver';
import { SzechenyiComponent } from './shared/szechenyi/szechenyi.component';
import { PrivacyStatementComponent } from './shared/privacy-statement/privacy-statement.component';
import { ChoosePackageComponent } from './client/booking/choose-package/choose-package.component';
import { TimeTableComponent } from './client/booking/date/time-table/time-table.component';
import { DateStartComponent } from './client/booking/date/date-start/date-start.component';
import { InfoFormGuard } from './client/booking/information-form/info-form-guard.service';
import { DateGuard } from './client/booking/date/date-guard.service';
import { CheckGuard } from './client/booking/check/check-guard.service';
import { ConfirmGuard } from './client/booking/confirmation/confirm-guard.service';
import { CanDeactivateGuard } from './client/booking/confirmation/deactivate-guard.service';
import { ReservationResolver } from './client/booking/reservation.resolver';
import { PackageResolver } from './client/packages/package.resolver';
import { NoDateResolver } from './client/booking/date/no-date.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, resolve:{small: SmallHeaderResolver} },
  { path: 'map', component: MapComponent, resolve:{small: SmallHeaderResolver} },
  { path: 'prices', component: PricesComponent, resolve:{small: SmallHeaderResolver} },
  { 
    path: 'game-modes',
    component: GameModesComponent,
    resolve:{small: SmallHeaderResolver},
    children:[
      { path: ':id/details', component: GameModesDetailsComponent }
    ]
  },
  { 
    path: 'booking',
    component: BookingComponent,
    resolve:{small: SmallHeaderResolver, PackageResolver},
    children:[ //kell majd valami Guard
      {
        path: '',
        component: ChoosePackageComponent,
        pathMatch: 'full'
      },
      {
        path: 'info', component: InformationFormComponent,
        canActivate: [InfoFormGuard]
      },
      {
        path: 'date', component: DateComponent,
        resolve: { ReservationResolver, NoDateResolver },
        canActivate: [DateGuard]
      },
      { path: 'check', component: CheckComponent, canActivate: [CheckGuard] },
      {
        path: 'confirm', component: ConfirmationComponent,
        canActivate: [ConfirmGuard], canDeactivate: [CanDeactivateGuard]
      }
    ]
  },
  { path: 'contact', component: ContactComponent, resolve:{small: SmallHeaderResolver} },
  { path: 'szechenyi', component: SzechenyiComponent, resolve:{small: SmallHeaderResolver} },
  { path: 'privacy', component: PrivacyStatementComponent, resolve:{small: SmallHeaderResolver} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
