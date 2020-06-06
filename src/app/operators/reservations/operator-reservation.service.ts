import { Injectable } from '@angular/core';
import { Reservation } from 'src/app/shared/models/reservation.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class OperatorResService {
    reservations: Reservation[] = [];
    reservationsChanged = new Subject<void>();
    fetchReservations() {
        //backend kérés
        return this.reservations = [
            new Reservation('1', 'Morvai Ákos', 'mor@lkjasd.com', '062030120', 16, ' adsfa sdfasdfa sdf asdf asdf asdfa dfasdfa sdf', '1', new Date(2020,6,12,12)),
            new Reservation('2', 'Szakály Ákos', 'mor@lkjasd.com', '062030120', 16, '', '1', new Date(2020,7,12,12)),
            new Reservation('3', 'Kiss Ákos', 'mor@lkjasd.com', '062030120', 16, '', '1', new Date(2020,8,12,12)),
            new Reservation('12', 'Sára Ákos', 'mor@lkjasd.com', '062030120', 16, 'asd fasdf asdf', '1', new Date(2020,6,17,12)),
            new Reservation('4', 'Nagy Ákos', 'mor@lkjasd.com', '062030120', 16, '', '1', new Date(2020,6,12,16)),
            new Reservation('5', 'Csernai Ákos', 'mor@lkjasd.com', '062030120', 16, 'asdfasd fsdf asdf asdf.', '1', new Date(2020,6,5,12)),
            new Reservation('6', 'Lakatos Ákos', 'asdfasdfr@lkjasd.com', '062030120', 16, '', '1', new Date(2020,4,12,12), true),
            new Reservation('7', 'Valami Ákos', 'masdr@lkjasd.com', '062030120', 16, 'adfasdfasdf', '1', new Date(2020,5,12,12), true),
            new Reservation('8', 'Nincs Ákos', 'asdasd@lkjasd.com', '062030120', 16, '', '1', new Date(2020,8,12,12), true),
            new Reservation('9', 'Ajaj Ákos', 'asdfasdf@lkjasd.com', '062030120', 16, 'adfa sdfad fasdfasdf a', '1', new Date(2020,3,17,12), true),
            new Reservation('10', 'LOL Ákos', 'asdfadsf@lkjasd.com', '062030120', 16, '', '1', new Date(2019,6,12,16), true),
            new Reservation('11', 'Csernai Ákos', 'mor@lkjasd.com', '062030120', 16, 'adsfasdfasdf', '1', new Date(2020,3,5,12), true)
            
        ];
    }
    getAcitve(): Reservation[] {
        return this.reservations
            .filter(reservation => reservation.archived === false).slice();
    }
    getArchived(): Reservation[] {
        return this.reservations
            .filter(reservation => reservation.archived === true).slice();
    }
    deleteReservations(reservationIds: string[]) {
        //backend kérés
        this.reservations = this.reservations.filter((reservation) => {
            return !reservationIds.some(id => id === reservation._id);
        });
        this.reservationsChanged.next();
    }
    archiveReservations(reservationIds: string[], toBeArchived: boolean) {
        //backend kérés
        this.reservations
            .filter((res) => reservationIds.some(id => id === res._id))
            .map((res) => res.archived = toBeArchived);
        this.reservationsChanged.next();
    }
}