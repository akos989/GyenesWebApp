import { Component, OnInit, Output, EventEmitter, OnChanges, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ReservationService } from 'src/app/client/booking/reservations.service';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { PackageService } from '../../packages/package.service';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.css']
})
export class InformationFormComponent implements OnInit, AfterViewChecked {

  packageChange: Subscription;

  reservationForm: FormGroup;
  editMode: boolean = false;
  maxPlayerNumber: number;
  minPlayerNumber: number;
  playerNumError = "";
  prevState = false;

  constructor(private router: Router,
              private reservationService: ReservationService,
              private packageService: PackageService,
              private bookingSevice: BookingService) { }

  ngOnInit(): void {    
    this.packageChange = this.bookingSevice.packageSelected
      .subscribe( packageId => {
        const pack = this.packageService.findById(packageId);
        this.maxPlayerNumber = pack.toNumberLimit;
        this.minPlayerNumber = pack.fromNumberLimit;
        this.reservationForm.get('playernumber').updateValueAndValidity();
      });    

    const currentReservation = this.reservationService.currentReservation;

    if ( currentReservation && currentReservation.name ) {
      this.editMode = true;
      this.prevState = true;
    }
    
    this.initForm();
  }

  initForm() {
    let name = '';
    let email = '';
    let phoneNumber = '';
    let playernumber;
    let notes = '';
    if (this.editMode) {
      const reservation = this.reservationService.currentReservation;
      name = reservation.name;
      email = reservation.email;
      phoneNumber = reservation.phoneNumber;
      playernumber = reservation.playerNumber;
      notes = reservation.notes;
    }
    this.reservationForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'phoneNumber': new FormControl(phoneNumber, [Validators.required]),
      'playernumber': new FormControl(playernumber,
                                      [
                                        Validators.required,
                                        this.playNumLimit.bind(this)
                                      ]),
      'notes': new FormControl(notes)
    });
  }

  onSubmit() {
    const currReservation = this.reservationService.currentReservation;
    const reservation = new Reservation(null,
      this.reservationForm.get('name').value,
      this.reservationForm.get('email').value,
      this.reservationForm.get('phoneNumber').value,
      this.reservationForm.get('playernumber').value,
      this.reservationForm.get('notes').value,
      currReservation.packageId, currReservation ? currReservation.date : null
    );    
    this.reservationService.currentReservation = reservation;
    //this.router.navigate(['/booking/date']);
  }

  playNumLimit(control: FormControl): {[s: string]: boolean} {
    if (control.value === null) {
      this.playerNumError = "A játékosok számának megadása kötelező";
      return null;
    }
    if (control.value > this.maxPlayerNumber || control.value < this.minPlayerNumber ) {
      this.playerNumError = "Nem egyezik a kiválasztott csomaggal, minimum "
                            + this.minPlayerNumber +
                            " és maximum " + this.maxPlayerNumber;
      return{'playerNumLimit': true};
    }
    this.playerNumError = "";
    return null;
  }

  backToPackage() {
    let reservation = this.reservationService.currentReservation;
    reservation.name = this.reservationForm.get('name').value;
    reservation.email = this.reservationForm.get('email').value;
    reservation.phoneNumber = this.reservationForm.get('phoneNumber').value;
    reservation.notes = this.reservationForm.get('notes').value;

    this.reservationService.currentReservation = reservation;

    this.router.navigate(['/booking']);
  }

  notEmpty(input :string): boolean {
    return (this.reservationForm.get(input).value === '' || this.reservationForm.get(input).value === null )
  }

  ngAfterViewChecked() {
    if (this.prevState !== this.reservationForm.valid) {
      this.bookingSevice.onInfoChange(this.reservationForm.valid);
      this.prevState = this.reservationForm.valid;
      if (this.prevState)
        this.onSubmit();
    }
  }
}
