import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipeEndpoint = `/recipes`;  // endpoint to web api

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeEndpoint)
      .pipe(
        tap(recipes => console.log(`${recipes.length} recipe(s) retrieved from url ${this.recipeEndpoint}`)),
        catchError(this.handleError<Recipe[]>('getRecipes'))
      );
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.recipeEndpoint}/${id}`)
      .pipe(
        catchError(this.handleError<Recipe>('getRecipe'))
      );
  }

  postRecipe(recipe: Recipe): Observable<Recipe> {
    const url = `${this.recipeEndpoint}/add`;
    return this.http.post<Recipe>(url, recipe)
    .pipe(
      catchError(this.handleError<Recipe>('postRecipe'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(`An error occurred while handling data: ${error}`); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
