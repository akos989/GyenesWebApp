import { Injectable } from '@angular/core';
import { Package } from 'src/app/shared/models/package.model';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({ providedIn: 'root' })
export class PackageService {
    packages: Package[] = [];

    loadFromBackend() {
        //http kérés
        this.packages = [
            new Package('1', 'Kicsi', 3, 10, 15, 3000, 2, false, 0),
            new Package('2', 'Közepes', 11, 20, 12, 3000, 2, false, 0),
            new Package('3', 'Nagy', 21, 35, 10, 3000, 2, false, 0),
            new Package('4', 'Akció1', 15, 20, 15, 5000, 2, true, 300),
            new Package('5', 'Akció2', 25, 35, 13, 6000, 2, true, 500),
        ];
    }

    findById(id: string): Package {
        this.loadFromBackend();
       for (const p of this.packages) {
            if (p.id === id)
                return p;
       }
       return null;
    }
}