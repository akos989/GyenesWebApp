import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({providedIn: 'root'})
export class ScrollTopService {

    scrollTop = new Subject<string>();

    onScrollTop(component: string) {
        this.scrollTop.next(component);
    }
} 