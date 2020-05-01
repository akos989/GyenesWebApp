export class Reservation {

    constructor(private _id: string, public name: string, public email: string,
        public phoneNumber: string, public playerNumber: number, public notes: string,
        public packageId: string, public date: Date) {
    }

    public equals(other: Reservation): boolean {
        let result = 
            (this.email === other.email) && (this.name === other.name) &&
            (this.date === other.date) && (this.notes === other.notes) &&
            (this.packageId === other.packageId) && (this.phoneNumber === other.phoneNumber)
            && (this.playerNumber === other.playerNumber);
        return result;
    }
}