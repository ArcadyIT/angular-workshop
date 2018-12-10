# angular-workshop
Code snippets that go along with Arcady's Angular Workshop.

## API Urls
- GET `/api/recipes` (Gets the recipes overview (a list of recipes))
- GET `/api/recipes/:dataId` (Gets one specific recipe based on the recipe ID)
- POST `/api/recipes/add` (Adds a recipe)

## app-routing.module.ts

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

<!-- add code here -->

import { TimeGuard } from './guards/time.guard';

const appRoutes: Routes = [
  {
    path: <!-- add code here -->,
    component: <!-- add code here -->,
    data: { title: 'Recept', animation: 'recipe' }, <!-- (optional) -->
    canActivate: [ TimeGuard ] <!-- (optional) -->
  },
  {
    path: <!-- add code here -->,
    component: <!-- add code here -->,
    data: { title: 'Overzicht recepten', animation: 'recipes' }
  },
  { path: '',
    redirectTo: <!-- add code here -->,
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

```

## recipe-card.component.html

```html
<mat-card class="recipe-card">
  <mat-card-header>
    <img mat-card-avatar [src]="recipe.chef.chefImageUrl" [alt]="recipe.chef.name"/>
    <mat-card-title>{{recipe.title}}</mat-card-title>
    <mat-card-subtitle>Een recept van {{recipe.chef?.name}}</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image [src]="recipe.imageUrl" [alt]="recipe.title">
  <mat-card-content>
    <div>
        <p>
            {{ recipe.description }}
        </p>
      </div>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button color="accent" <!-- add code here -->>BEKIJK RECEPT</button>
  </mat-card-actions>
</mat-card>
```

## recipe.module.ts

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

<!-- add code here -->

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
  imports: [
    CommonModule,
    <!-- add code here -->,

    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    RecipeListComponent,
    RecipeCardComponent,
    RecipeDetailComponent
  ],
  exports: [RecipeListComponent]
})
export class RecipeModule { }

```

## recipe-detail.component.html
```html
<mat-card class="recipe-detail" *ngIf="recipe$ | async as recipe">
  <mat-card-header>
    <img mat-card-avatar [src]="recipe.chef.chefImageUrl" [alt]="recipe.chef.name"/>
    <mat-card-title>{{recipe.title}}</mat-card-title>
    <mat-card-subtitle>Een recept van {{recipe.chef?.name}}</mat-card-subtitle>
  </mat-card-header>
  <img class="recipe-detail-image" mat-card-image [src]="recipe.imageUrl" [alt]="recipe.title">
  <button mat-fab class="recipe-detail-add">
    <mat-icon aria-label="Example icon-button with a heart icon">add</mat-icon>
  </button>
  <mat-card-content>
    <div>
      <p class="recipe-detail-description">
          {{ recipe.description }}
      </p>
    </div>
    <div class="recipe-detail-container">
      <div class="recipe-detail-ingredients">
        <strong>Ingrediënten</strong>
        <ul>
          <li *ngFor="let ingredient of recipe.ingredients">
            {{ ingredient.unit }} {{ ingredient.ingredientName }}
          </li>
        </ul>
      </div>
      <div class="recipe-detail-preparation">
        <strong>Bereiding</strong>
        <p [innerHtml]="recipe.prep"></p>
      </div>
    </div>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button color="accent" <!-- Add code here -->>NAAR OVERZICHT</button>
  </mat-card-actions>
</mat-card>

```

## recipe-detail.component.scss
```css
.recipe-detail {
  width: 800px;
}

.recipe-detail-image {
  height: 300px;
  object-fit: cover;
}

.recipe-detail-add {
  position: absolute;
  right: 16px;
  top: 347px;
}

.recipe-detail-description {
  font-size: 20px;
  font-style: italic;
}

.recipe-detail-container {
  display: flex;
}

.recipe-detail-ingredients {
  flex: 0 0 300px;
}

.recipe-detail-ingredients ul {
  padding: 0;
  list-style-type: none;

  li {
    margin: 0;
    padding: 0;
    line-height: 30px;
  }
}

.recipe-detail-preparation {
  p {
    line-height: 20px;
  }
}

```

## app.component.html

```typescript
<mat-toolbar color="primary">
  <a class="home-link" href="/"><span>{{ title }} | {{ subtitle }}</span></a>
</mat-toolbar>
<div class="content">
  <!-- add code here -->
</div>

```

## app.component.ts

```typescript
import { Component } from '@angular/core';
<!-- add code here -->

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipeace';
  subtitle = 'Vrede in de keuken';
}
```


## app.component.html

```typescript
<mat-toolbar color="primary">
  <a class="home-link" href="/"><span>{{ title }} | {{ subtitle }}</span></a>
</mat-toolbar>
<div class="content">
  <div [@routeAnimation]="getAnimationData(routerOutlet)">
    <router-outlet #routerOutlet="outlet"></router-outlet>
  </div>
</div>

```

## app.component.ts

```typescript
import { Component } from '@angular/core';
<!-- add code here -->
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'Recipeace';
  subtitle = 'Vrede in de keuken';

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
```

## animations.ts

```typescript
import {
  trigger, group,
  transition, animate, style, query
} from '@angular/animations';

// Routable animations
export const slideInAnimation =
  trigger('routeAnimation', [
    transition('recipes <=> recipe', [
      query(':enter, :leave', style({ position: 'relative', width: '100%', opacity: 1 })),
        group([
          query(':enter', [
            style({ opacity: 0 }),
            animate('500ms ease-in-out', style({ opacity: 1 }))
          ]),
          query(':leave', [
            style({ opacity: 1 }),
            animate('500ms ease-in-out', style({ opacity: 0 }))
          ]),
        ])
    ])
  ]);

```
