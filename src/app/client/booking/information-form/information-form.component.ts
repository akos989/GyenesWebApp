import { Component, OnInit, Output, EventEmitter, OnChanges, AfterViewChecked, AfterContentChecked, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('numberinput') numberInputRef: ElementRef;

  reservationForm: FormGroup;
  editMode: boolean = false;
  maxPlayerNumber: number = 0;
  minPlayerNumber: number = 0;
  playerNumError = "";
  prevData: Reservation = null;
  currentData: Reservation = null;

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
        if(this.reservationForm.get('playernumber').value !== null)
          this.reservationForm.get('playernumber').markAsTouched();
        this.bookingSevice.onInfoChange(this.reservationForm.valid);
      });    

    const currentReservation = this.reservationService.currentReservation;

    if ( currentReservation && currentReservation.name ) {
      this.editMode = true;
      this.prevData = currentReservation;
    }
    
    this.initForm();
    document.getElementById('numberinput').addEventListener("mousewheel", function(event){ this.blur() });
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
    this.reservationForm.get('playernumber')
  }

  onSubmit() {     
    this.reservationService.currentReservation = this.currentData;
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

  notEmpty(input :string): boolean {
    return (this.reservationForm.get(input).value === '' || this.reservationForm.get(input).value === null )
  }

  ngAfterViewChecked() {
    if(this.reservationService.currentReservation &&
       this.reservationService.currentReservation.packageId)
       {
         this.updateCurrentData();
         if ((this.prevData === null ||
           (this.prevData !== null && !this.equals(this.currentData))) )
         {
           this.prevData = this.currentData;
           this.bookingSevice.onInfoChange(this.reservationForm.valid);
           if (this.reservationForm.valid)
             this.onSubmit();
         }
    }
  }

  private updateCurrentData() {
    const currReservation = this.reservationService.currentReservation;
    this.currentData = new Reservation('1',
      this.reservationForm.get('name').value,
      this.reservationForm.get('email').value,
      this.reservationForm.get('phoneNumber').value,
      this.reservationForm.get('playernumber').value,
      this.reservationForm.get('notes').value,
      currReservation.packageId, currReservation ? currReservation.date : null
    );
  }

  private equals(other: Reservation): boolean {
    let result = 
        (this.prevData.email === other.email) && (this.prevData.name === other.name) &&
        (this.prevData.date === other.date) && (this.prevData.notes === other.notes) &&
        (this.prevData.packageId === other.packageId) && (this.prevData.phoneNumber === other.phoneNumber)
        && (this.prevData.playerNumber === other.playerNumber);
    return result;
}
}
