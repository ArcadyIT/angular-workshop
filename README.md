# angular-workshop
Code snippets that go along with Arcady's Angular Workshop.

## recipe.service.ts

```typescript
<!-- add code here -->

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(<!-- add code here -->) { }

  getRecipes(): Observable<Recipe[]> {
    <!-- add code here -->
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(`An error occurred while handling data: ${error}`); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
```

## recipe-list.component.ts

```typescript
import { Component, OnInit } from '@angular/core';

<!-- add code here -->

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(<!-- add code here -->) { }

  ngOnInit() {
    <!-- add code here -->
  }

  <!-- add code here -->
}
```

## base-url-interceptor.ts

```typescript
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    <!-- add code here -->

    return next.handle(apiRequest);
  }
}
```

## index.ts

```typescript

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BaseUrlInterceptor } from './base-url-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
];

```