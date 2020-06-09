import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ErrorHandleService } from '../error-handle.service';

export class User {
    constructor(
        public email: string,
        public localId: string,
        private _token: string,
        private _tokenExpirationDate: Date) { }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
            return null;
        return this._token;
    }
}

interface UserData {
    localId: string;
    email: string;
    expiresIn: string;
    token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private _currentUser: User = null;
    public get currentUser() {
        if (!this._currentUser) {
            this.autoLogin();
        }
        return this._currentUser;
    }
    public set currentUser(value: User) {
        this._currentUser = value;
        if (value)
            localStorage.setItem('userData', JSON.stringify(this._currentUser));
        else
            localStorage.removeItem('userData');
        console.log(this._currentUser);
    }
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private errorHandler: ErrorHandleService,
                private router: Router) { }

    login(email: string, password: string) {
        return this.http.post<UserData>(
            'api/operators/login',
            {
                email: email,
                password: password
            }
        )
        .pipe(
            catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
                this.errorHandler.newError(errorRes.error.error);
                return throwError(errorRes);
            }),
            tap(resData => {
                this.handleAuth(resData.email, resData.localId, resData.token, +resData.expiresIn);
            })
        );
    }
    logout() {
        this.currentUser = null;
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
        this.router.navigate(['/home']);
    }
    private autoLogin() {
        const userData: {
            email: string,
            localId: string,
            _token: string,
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(
            userData.email, 
            userData.localId, 
            userData._token, 
            new Date(userData._tokenExpirationDate)
        );
        if (loadedUser.token) {
            this._currentUser = loadedUser;
            const expirationDuration =
                new Date(userData._tokenExpirationDate).getTime() - 
                new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }
    private autoLogout(duration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, duration);
    }
    private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        this.currentUser = new User(email, userId, token, expirationDate);
        this.autoLogout(expiresIn * 1000);
    }
}