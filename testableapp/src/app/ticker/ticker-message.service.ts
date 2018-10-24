import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TickerMessageService {

  getMessage(): Observable<string> {
    return of('Hello world! This is the most important message ever.');
  }
}
