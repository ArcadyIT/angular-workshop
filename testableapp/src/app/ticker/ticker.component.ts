import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { TickerMessageService } from './ticker-message.service';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-ticker',
  template: `
    <marquee>{{ message | async }}</marquee>
  `
})
export class TickerComponent implements OnInit {

  message: Observable<string>;

  constructor(private tickerMessageService: TickerMessageService) { }

  ngOnInit() {
    this.message = this.tickerMessageService.getMessage()
      .pipe(
        map(value => `Important message: "${value}"`),
        catchError(() => {
          return of('Something went wrong while getting the latest message!');
        })
      );
  }
}
