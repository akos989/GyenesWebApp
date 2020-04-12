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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'prices', component: PricesComponent },
  { 
    path: 'game-modes',
    component: GameModesComponent,
    children:[
      { path: ':id/details', component: GameModesDetailsComponent }
    ]
  },
  { 
    path: 'booking',
    component: BookingComponent,
    children:[ //kell majd valami Guard + formData => localstorage
      { path: 'date', component: DateComponent },
      { path: 'info', component: InformationFormComponent },
      { path: 'check', component: CheckComponent },
      { path: 'confirm', component: ConfirmationComponent }
    ]
  },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
