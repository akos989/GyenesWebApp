import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

class Error {
    error: string;
    message?: string;
}

@Injectable({providedIn: 'root'})
export class ErrorHandleService {
    error = new Subject<string>();

    constructor(private router: Router) {}

    newError(err: Error) {
        this.error.next(this.findError(err));
    }

    findError(error: Error): string {
        let message: string;
        let errorMessage: string;

        if (error && error.error) {
            errorMessage = error.error;
        } else {
            errorMessage = '';
        }

        switch(errorMessage) {
            case 'FAILED':
                message = 'Valami hiba történt, próbálja újra!';
                this.router.navigate(['/home']);
            break;
            case 'NO_PACKAGE':
                message = 'Nem található a megadott csomag!';
            break;
            case 'NOT_GOOD_PACKAGE':
                message = 'A létszám nem felel meg a kiválasztott csomagnak!';
            break;
            case 'DATE_IS_BEFORE_MIN':
                message = 'A dátum nem lehet kisebb, mint a következő nap!';
            break;
            case 'DATE_FULL':
                message = 'A kiválasztott időpontot időközben lefoglalták, sajnos már nem elérhető!';
            break;
            case 'DATE_CLOSED':
                message = 'A kiválasztott dátumon sajnos nem üzemel a pálya!';
            break;            
            default:
                message = 'Valami hiba történt, próbálja újra!';
                this.router.navigate(['/home']);
            break;
        }

        return message;
    }
}