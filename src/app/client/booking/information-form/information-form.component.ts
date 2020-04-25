import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ReservationService } from 'src/app/client/booking/reservations.service';
import { Reservation } from 'src/app/shared/models/reservation.model';

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.css']
})
export class InformationFormComponent implements OnInit {

  reservationForm: FormGroup;
  editMode: boolean = false;
  packageId: string;
  maxPlayerNumber: number;
  playerNumError = "";

  constructor(private router: Router,
              private reservationService: ReservationService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.packageId = params['packageId'];
        }
      );
    this.maxPlayerNumber = this.reservationService.gunNumber;
    if ( this.reservationService.currentReservation ) {
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
      this.packageId, currReservation ? currReservation.date : null
    );    
    this.reservationService.currentReservation = reservation;
    
    this.router.navigate(['/booking/date']);
  }

  playNumLimit(control: FormControl): {[s: string]: boolean} {
    if (control.value == null) {
      this.playerNumError = "A játékosok számának megadása kötelező";
      return null;
    }
    if (control.value > this.maxPlayerNumber || control.value <= 0 ) {
      this.playerNumError = "Minimum 1 és maximum " + this.maxPlayerNumber;
      return{'playerNumLimit': true};
    }
    this.playerNumError = "";
    return null;
  }
}
