import { Package } from './package.model';

export class PackageType {
    constructor(public id: string, public name: string, public packages: Package[],
                public sale: boolean = false) {}
}