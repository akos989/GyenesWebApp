import { Equipment } from 'src/app/shared/models/equipment.model';

export class Field {
    public constructor(public name: string, public description: string, public imgPath: string,
                       public equipments: Equipment[], public optDescription: string = "",
                       public imgRoot: string = '', public imgNumber: number = 0) {}
}