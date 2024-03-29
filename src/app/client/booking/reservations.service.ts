import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap, catchError} from 'rxjs/operators';

import {Reservation} from '../../shared/models/reservation.model';
import {PackageService} from '../packages/package.service';
import {ErrorHandleService} from 'src/app/shared/error-handle.service';
import {throwError} from 'rxjs/internal/observable/throwError';
import {Subject} from 'rxjs';
import {AcceptCookieService} from 'src/app/shared/cookie/cookie.service';
import {CookieService} from 'ngx-cookie-service';
import {OperatorResService} from 'src/app/operators/reservations/operator-reservation.service';
import {environment} from 'src/environments/environment';

class Hour {
  constructor(public hour: number, public type: string, public remainingNumber: number) {
  }
}

class Range {
  constructor(public start: number, public end: number) {
  }
}

@Injectable({providedIn: 'root'})
export class ReservationService {

  isOperatorEditing: boolean = false;

  constructor(private packageService: PackageService, private http: HttpClient,
              private errorHandler: ErrorHandleService,
              private acceptCookiesS: AcceptCookieService,
              private cookieService: CookieService,
              private oResService: OperatorResService) {
  }

  currReservationUpdated = new Subject<Reservation>();

  private _currentReservation: Reservation = null;

  public get currentReservation(): Reservation {
    if (this._currentReservation == null) {
      if (this.acceptCookiesS.accepted) {
        this.retrieveFromLocalStorage();
      }
    }
    if (!this._currentReservation) {
      this._currentReservation = new Reservation('1', null, null, null, null, null, null, null);
    }
    return this._currentReservation;
  }

  public set currentReservation(value: Reservation) {
    this._currentReservation = value;
    if (this.acceptCookiesS.accepted) {
      this.saveToLocalStorage();
    }
    this.currReservationUpdated.next(this._currentReservation);
  }

  //backendbe felvenni és onnan lekérni
  gunNumber: number = 35;

  private _submitted: boolean = false;
  public get submitted(): boolean {
    if (!this._submitted && this.acceptCookiesS.accepted) {
      const submitCookieValue: string = this.cookieService.get('reservation-submitted');
      if (submitCookieValue && submitCookieValue === 'true') {
        this._submitted = true;
      }
    }
    return this._submitted;
  }

  public set submitted(v: boolean) {
    this._submitted = v;
    if (this.acceptCookiesS.accepted) {
      let date = new Date(this._currentReservation.date);
      this.cookieService.set('reservation-submitted', (v ? 'true' : 'false'), date);
    }
  }

  makeNewReservation() {
    const newReservation = this.currentReservation;
    newReservation.date = null;
    newReservation.packageId = null;
    newReservation.playerNumber = null;
    this.currentReservation = newReservation;
  }

  reservations: Reservation[] = [];

  loadReservations() {
    return this.http
      .get<{ reservations: Reservation[] }>(environment.serverUrl + 'api/reservations/allForClient')
      .pipe(
        map((responseData) => {
          const reservationArray: Reservation[] = [];

          for (const reservation of responseData.reservations) {
            reservationArray.push(new Reservation(
              reservation._id, null, null, null, reservation.playerNumber,
              null, reservation.packageId,
              this.dateFromString(reservation.date.toString(), 0)
            ));
          }
          return reservationArray;
        }),
        tap(reservations => {
          this.reservations = reservations;
        }),
        catchError((errorRes: { error: { error: { error: string, message: any } } }) => {
          this.errorHandler.newError(errorRes.error.error);
          return throwError(errorRes);
        })
      );
  }

  checkHoursOnSelectedDate(selectedDate: Date): Hour[] {
    const hours: Hour[] = [];
    for (let hour = 8; hour <= 18; hour++) {
      let tmpPlayerNumber: number = this._currentReservation.playerNumber;
      let intersectionNumber: number = 0;
      const reservations = this.getReservationsOnSelectedDate(selectedDate);
      for (let reservation of reservations) {
        if (reservation._id !== this._currentReservation._id &&
          this.intersect(hour, reservation)) {
          tmpPlayerNumber += reservation.playerNumber;
          intersectionNumber++;
        }
      }
      let tmpHour: Hour;
      if (tmpPlayerNumber === this._currentReservation.playerNumber) {
        tmpHour = (new Hour(hour, 'e', this.gunNumber));
      } else if (tmpPlayerNumber <= this.gunNumber) {
        const remainingNumber =
          this.gunNumber - (tmpPlayerNumber - this._currentReservation.playerNumber);
        tmpHour = (new Hour(hour, 'p', remainingNumber));
      } else {
        tmpHour = (new Hour(hour, 'f', 0));
      }
      if (intersectionNumber >= 2) {
        tmpHour.type = 'f';
      }
      if (this.isSmallerThanToday(selectedDate, hour)) {
        tmpHour.type = 't';
      }
      hours.push(tmpHour);
    }

    return hours;
  }

  private isSmallerThanToday(selectedDate: Date, hour: number) {
    let today: Date = this.makeUTCNewDate();
    today.setHours(today.getHours() + 4);
    today.setMinutes(1);
    let date = new Date(selectedDate.valueOf());
    date.setHours(hour);
    if (date.valueOf() <= today.valueOf()) {
      return true;
    }
    return false;
  }

  private makeUTCNewDate(): Date {
    const now = new Date();
    return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes());
  }

  submitCurrentReservation() {
    const body = {
      name: this._currentReservation.name,
      email: this._currentReservation.email,
      phoneNumber: this._currentReservation.phoneNumber,
      playerNumber: this._currentReservation.playerNumber,
      notes: this._currentReservation.notes,
      packageId: this._currentReservation.packageId,
      date: this.stringFromDate(this._currentReservation.date)
    };
    if (!this.isOperatorEditing) {
      return this.http.post<{ reservation: Reservation }>(environment.serverUrl + 'api/reservations/', body)
        .pipe(tap(resData => {
          this.oResService.updateReservation(resData.reservation);
        }));
    } else {
      return this.http.patch<{ reservation: Reservation }>(environment.serverUrl + 'api/reservations/' + this._currentReservation._id, body)
        .pipe(tap(resData => {
          this.oResService.updateReservation(resData.reservation);
        }));
    }
    ;
  }

  private getReservationsOnSelectedDate(selectedDate: Date): Reservation[] {
    const reservations: Reservation[] = [];
    for (let reservation of this.reservations) {
      if (reservation.date.getFullYear() === selectedDate.getFullYear() &&
        reservation.date.getMonth() === selectedDate.getMonth() &&
        reservation.date.getDate() === selectedDate.getDate()
      ) {
        reservations.push(reservation);
      }
    }
    return reservations;
  }

  private saveToLocalStorage() {
    localStorage.setItem(
      'currentReservation', JSON.stringify(this._currentReservation)
    );
  }

  private retrieveFromLocalStorage() {
    const lStorageReserv =
      JSON.parse(localStorage.getItem('currentReservation'));
    if (lStorageReserv !== null && lStorageReserv !== '') {
      this._currentReservation = lStorageReserv;
      if (lStorageReserv.date !== null && lStorageReserv.date !== '') {
        this.setCurrentReservationDateFromString(lStorageReserv.date);
      }
    }
  }

  private setCurrentReservationDateFromString(dateString: string) {
    this._currentReservation.date = this.dateFromString(dateString, 2);

    if (this._currentReservation.date.valueOf() <= new Date().valueOf()) {
      this._currentReservation.date = null;
      this.saveToLocalStorage();
    }
  }

  private intersect(hour: number, reservation: Reservation): boolean {
    const a = new Range(
      reservation.date.getHours(),
      reservation.date.getHours() +
      this.packageService.findById(reservation.packageId).duration
    );
    const b = new Range(
      hour, hour +
      this.packageService.findById(this.currentReservation.packageId).duration
    );

    const min = (a.start < b.start) ? a : b;
    const max = (a === min) ? b : a;

    if (min.end <= max.start) {
      return false;
    }

    return true;
  }

  private dateFromString(dateString: string, plus: number): Date {
    const dateParts: string[] = dateString.split('T');

    return new Date(
      +(dateParts[0].split('-')[0]),
      +(dateParts[0].split('-')[1]) - 1,
      +(dateParts[0].split('-')[2]),
      +(dateParts[1].split(':')[0]) + plus
    );
  }

  private stringFromDate(date: Date): string {
    const month: string = ((date.getMonth() + 1) >= 10) ?
      (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1);
    const day: string = ((date.getDate()) >= 10) ?
      (date.getDate()).toString() : '0' + (date.getDate());
    const hour: string = ((date.getHours()) >= 10) ?
      (date.getHours()).toString() : '0' + (date.getHours());

    return date.getFullYear() + '-' + month + '-' + day + 'T' + hour + ':00Z';
  }

  isCurrentReady(): boolean {
    if (!this._currentReservation) {
      return false;
    }
    for (const key in this._currentReservation) {
      if (this._currentReservation[key] === null) {
        return false;
      }
    }
    return true;
  }
}
