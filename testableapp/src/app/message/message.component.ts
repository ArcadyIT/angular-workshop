import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="showMessage">
      <h1>Hello world!</h1>
    </div>

    <button (click)="toggleShow()">Toggle message</button>
  `
})
export class MessageComponent {

  showMessage = false;

  toggleShow() {
    this.showMessage = !this.showMessage;
  }
}
