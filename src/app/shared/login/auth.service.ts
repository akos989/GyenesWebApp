import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<boolean> {
        //backend login
        //<== token
        //cookie ban eltároljuk vagy locals-ban
        return new Observable();
    }
}