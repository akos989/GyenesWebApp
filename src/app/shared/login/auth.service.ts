import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ErrorHandleService } from '../error-handle.service';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

export class User {
    constructor(
        public email: string,
        public localId: string,
        public newReservations: string[],
        private _token: string,
        private _tokenExpirationDate: Date) { }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
            return null;
        return this._token;
    }
    get tokenExpirationDate(): Date {
        return this._tokenExpirationDate;
    }
}

interface UserData {
    localId: string;
    email: string;
    expiresIn: string;
    token: string;
    newReservations: string[];
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    currentUserChanged = new Subject<User>();
    newResNumberChange = new Subject<void>();
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
    }
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private errorHandler: ErrorHandleService,
                private router: Router) { }

    login(email: string, password: string) {
        return this.http.post<UserData>(
            environment.serverUrl+'api/operators/login',
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
                this.handleAuth(
                    resData.email, resData.localId,
                    resData.token, +resData.expiresIn, resData.newReservations
                );
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
    fetchCurrentUser() {
        if (this.currentUser) {
            this.http.post<{operator: UserData}>(
                environment.serverUrl+'api/operators/my_account',
                {operatorId: this._currentUser.localId}
            )
                .subscribe(
                    resData => {
                        const user = new User(
                            this._currentUser.email, this._currentUser.localId,
                            resData.operator.newReservations,
                            this._currentUser.token, this._currentUser.tokenExpirationDate
                        );
                        this.currentUser = user;
                        this.currentUserChanged.next(user);
                    },
                    (errorRes: {error: {error: {error: string, message: any}}}) => {
                        this.errorHandler.newError(errorRes.error.error);
                        return throwError(errorRes);
                    }
                );
        }
    }
    viewReservation(id: string) {
        const newReservations = this._currentUser.newReservations.filter(resId => {
            return resId !== id;
        });
        if (newReservations.length !== this._currentUser.newReservations.length) {
            this.http.post(
                environment.serverUrl+'api/operators/view_reservation',
                {
                    operatorId: this._currentUser.localId,
                    reservationId: id
                }
            )
            .subscribe(
                resData => {
                    const user = new User(
                        this._currentUser.email, this._currentUser.localId,
                        newReservations,
                        this._currentUser.token, this._currentUser.tokenExpirationDate
                    );
                    this.currentUser = user;
                    this.newResNumberChange.next();
                },
                (errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                }
            );
        }
    }
    newUserNotification() {
        this.currentUserChanged.next(this._currentUser);
    }
    private autoLogin() {
        const userData: {
            email: string,
            localId: string,
            newReservations: string[],
            _token: string,
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(
            userData.email, 
            userData.localId,
            userData.newReservations, 
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
    private handleAuth(email: string, userId: string, token: string, expiresIn: number, newRes: string[]) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        this.currentUser = new User(email, userId, newRes, token, expirationDate);
        this.autoLogout(expiresIn * 1000);
    }
}