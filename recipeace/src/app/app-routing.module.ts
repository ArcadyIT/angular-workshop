import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { TimeGuard } from './guard/time.guard';

const appRoutes: Routes = [
  {
    path: 'recipes/:id',
    component: RecipeDetailComponent,
    data: { animation: 'recipe' },
    canActivate: [ TimeGuard ]
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
