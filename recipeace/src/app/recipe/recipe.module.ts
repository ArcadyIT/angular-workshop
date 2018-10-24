import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatButton } from '@angular/material/button';

import { RecipeListComponent } from './recipe-list/recipe-list.component';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule
  ],
  declarations: [RecipeListComponent],
  exports: [RecipeListComponent]
})
export class RecipeModule { }
