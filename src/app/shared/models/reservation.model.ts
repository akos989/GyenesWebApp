export class Reservation {

  constructor(public _id: string, public name: string, public email: string,
              public phoneNumber: string, public playerNumber: number, public notes: string,
              public packageId: string, public date: Date, public archived: boolean = false,
              public timeStamp: Date = new Date()) {
  }

  public equals(other: Reservation): boolean {
    const result =
      (this.email === other.email) && (this.name === other.name) &&
      (this.date === other.date) && (this.notes === other.notes) &&
      (this.packageId === other.packageId) && (this.phoneNumber === other.phoneNumber)
      && (this.playerNumber === other.playerNumber);
    return result;
  }
}
