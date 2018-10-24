import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { NotebookComponent } from './notebook/notebook.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { PalindromePipe } from './pipe/palindrome.pipe';
import { TickerComponent } from './ticker/ticker.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NotebookComponent,
    ProductOverviewComponent,
    PalindromePipe,
    TickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
