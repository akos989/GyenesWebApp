import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ReservationService } from 'src/app/client/booking/reservations.service';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { PackageService } from '../../packages/package.service';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.css']
})
export class InformationFormComponent implements OnInit {

  reservationForm: FormGroup;
  editMode: boolean = false;
  maxPlayerNumber: number;
  minPlayerNumber: number;
  playerNumError = "";

  constructor(private router: Router,
              private reservationService: ReservationService,
              private packageService: PackageService) { }

  ngOnInit(): void {
    const currentReservation = this.reservationService.currentReservation;
    const pack = this.packageService
      .findById(currentReservation.packageId);
    this.maxPlayerNumber = pack.toNumberLimit;
    this.minPlayerNumber = pack.fromNumberLimit;

    if ( currentReservation.name ) {
      this.editMode = true;
    }
    
    this.initForm();
  }

  initForm() {
    let name = '';
    let email = '';
    let phonenumber = '';
    let playernumber;
    let notes = '';
    if (this.editMode) {
      const reservation = this.reservationService.currentReservation;
      name = reservation.name;
      email = reservation.email;
      phonenumber = reservation.phonenumber;
      playernumber = reservation.playerNumber;
      notes = reservation.notes;
    }
    this.reservationForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'phonenumber': new FormControl(phonenumber, [Validators.required]),
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
      this.reservationForm.get('phonenumber').value,
      this.reservationForm.get('playernumber').value,
      this.reservationForm.get('notes').value,
      currReservation.packageId, currReservation ? currReservation.date : null
    );    
    this.reservationService.currentReservation = reservation;
    this.router.navigate(['/booking/date']);
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
    reservation.phonenumber = this.reservationForm.get('phonenumber').value;
    reservation.notes = this.reservationForm.get('notes').value;

    this.reservationService.currentReservation = reservation;

    this.router.navigate(['/booking']);
  }
}
