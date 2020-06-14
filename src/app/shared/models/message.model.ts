export class Message {
    constructor(public _id: string, public name: string, public email: string, public text: string,
                public replied: string = '', public reply: string = '', public timestamp: Date = new Date()) {}
}