import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecipeListComponent],
  exports: [RecipeListComponent]
})
export class RecipeModule { }
