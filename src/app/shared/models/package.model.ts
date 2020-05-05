export class Package {
    constructor(
        public id: string,
        public name: string,
        public fromNumberLimit:number,        
        public toNumberLimit: number,
        public bulletPrice: number,
        public basePrice:number,
        public duration: number,
        public includedBullets: number
    ) {}
}