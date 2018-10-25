import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  private getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe((recipes: Recipe[]) => this.recipes = recipes);
  }

}
