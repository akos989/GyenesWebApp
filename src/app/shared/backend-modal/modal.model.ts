export class Modal {
    constructor(public name: string, public description: string,
                public modalImgUrl: string = '', public fromDate: Date = null, public toDate
                : Date = null, public _id: string = '') {}
}