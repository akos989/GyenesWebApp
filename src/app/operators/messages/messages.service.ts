import { Injectable } from '@angular/core';
import { Message } from 'src/app/shared/models/message.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ErrorHandleService } from 'src/app/shared/error-handle.service';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MessagesService {

    messages: Message[] = [];
    newMessages = new Subject<void>();

    constructor(private http: HttpClient, private errorHandler: ErrorHandleService) {}

    fetchMessages() {
        return this.http.get<{messages: Message[]}>('api/messages/')
            .pipe(
                map(resData => {
                    resData.messages.map(message => {
                        const date = this.dateFromString(message.timestamp.toString(), 2);
                        message.timestamp = date;
                    })
                    return resData.messages
                }),
                tap(messages =>{
                    this.messages = messages;
                    this.newMessages.next();
                },
                catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                })
            ));
    }
    getNotReplied(): Message[] {
        return this.messages.filter(message => {
            return message.replied === '';
        });
    }
    delete(ids: string[]) {
        let options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            }),
            body: {
                ids: ids
            },
        };
        this.http.delete('api/messages/', options)
            .subscribe(
                resData => {
                    this.messages = this.messages.filter(message => {
                        return !ids.some(id => id === message._id);
                    });
                    this.newMessages.next();
                },
                (errorRes: {error: {error: {error: string, message: any}}}) => {
                    this.errorHandler.newError(errorRes.error.error);
                    return throwError(errorRes);
                }
            );
    }
    reply(replyBody, replier, messageId) {
        return this.http.post<Message>(
            'api/messages/reply/' + messageId, 
            {
                replyBody: replyBody,
                replier: replier
            }
        )
        .pipe(
            map(resData => {
                const date = this.dateFromString(resData.timestamp.toString(), 2);
                resData.timestamp = date;
                return resData;
            }),
            tap(resData => {
                this.changeById(resData);
            }),
            catchError((errorRes: {error: {error: {error: string, message: any}}}) => {
                this.errorHandler.newError(errorRes.error.error);
                return throwError(errorRes);
            })        
        ).subscribe((resData)=> {});
    }
    changeById(value: Message) {
        const idx = this.messages.findIndex(message => message._id === value._id);
        if (idx > -1) {
            this.messages[idx] = value;
        }
        this.newMessages.next();
    }
    findById(id: string): Message {
        return this.messages.filter(message => {return (message._id === id)})[0];
    }
    private dateFromString(dateString: string, plus: number): Date {
        const dateParts:string[] = dateString.split('T');

        return new Date(
            +(dateParts[0].split('-')[0]),
            +(dateParts[0].split('-')[1]) - 1,
            +(dateParts[0].split('-')[2]),
            +(dateParts[1].split(':')[0]) + plus       
        );
    }
}