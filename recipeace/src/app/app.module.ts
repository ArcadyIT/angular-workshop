import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';

import { RecipeModule } from './recipe/recipe.module';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,

    MatToolbarModule,

    RecipeModule
  ],
  providers: [
    httpInterceptorProviders,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
