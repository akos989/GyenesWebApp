export class Reservation {

    constructor(private _id: string, public name: string, public email: string,
        public phoneNumber: string, public playerNumber: number, public notes: string,
        public packageId: string, public date: Date) {
    }
}