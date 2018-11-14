import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [
    RecipeListComponent,
    RecipeCardComponent,
    RecipeDetailComponent,
    RecipeAddComponent
  ],
  exports: [RecipeListComponent]
})
export class RecipeModule { }
