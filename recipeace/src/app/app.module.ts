import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';

import { RecipeModule } from './recipe/recipe.module';
import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './http-interceptors';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,

    MatToolbarModule,

    AppRoutingModule,
    RecipeModule
  ],
  providers: [
    httpInterceptorProviders,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
