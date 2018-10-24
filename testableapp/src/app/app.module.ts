import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { NotebookComponent } from './notebook/notebook.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NotebookComponent,
    ProductOverviewComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
