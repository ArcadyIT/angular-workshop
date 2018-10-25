import { Component, OnInit } from '@angular/core';

import { RECIPES } from '../shared/recipe-list.mock';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes = RECIPES;

  constructor() { }

  ngOnInit() {
  }

}
