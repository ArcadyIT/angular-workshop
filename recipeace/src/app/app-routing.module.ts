import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeAddComponent } from './recipe/recipe-add/recipe-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'recipes/new',
    component: RecipeAddComponent,
    data: { title: 'Recept toevoegen', animation: 'recipes' }
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailComponent,
    data: { title: 'Recept', animation: 'recipe' }
  },
  {
    path: 'recipes',
    component: RecipeListComponent,
    data: { title: 'Overzicht recepten', animation: 'recipes' }
  },
  { path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
