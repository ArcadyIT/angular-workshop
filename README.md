# angular-workshop
Code snippets that go along with Arcady's Angular Workshop.

## API Urls
- GET `/api/recipes` (Gets the recipes overview (a list of recipes))
- GET `/api/recipes/:dataId` (Gets one specific recipe based on the recipe ID)
- POST `/api/recipes/add` (Adds a recipe)

## recipe.service.ts
```typescript
postRecipe(recipe: Recipe): Observable<Recipe> {
    <!-- add code here -->
  }
```

## recipe-add.component.html

```html
<form <!-- add code here --> class="recipe-form">
  <mat-card>
    <mat-card-header>
      <mat-card-title>Nieuw recept toevoegen</mat-card-title>
      <mat-card-subtitle></mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      <div class="recipe-card">
        <div class="recipe-form-group">
          <h4>Gerecht</h4>
          <mat-form-field class="recipe-form-field">
            <input matInput placeholder="Titel" <!-- add code here -->>
          </mat-form-field>
          <mat-form-field class="recipe-form-field">
            <input matInput placeholder="Afbeelding" <!-- add code here -->>
          </mat-form-field>
          <mat-form-field class="recipe-form-field">
            <textarea matInput placeholder="Omschrijving" <!-- add code here -->></textarea>
          </mat-form-field>
          <mat-form-field class="recipe-form-field">
            <textarea matInput placeholder="Bereiding" <!-- add code here -->></textarea>
          </mat-form-field>
        </div>
        <div class="recipe-form-group" <!-- add code here -->>
          <h4>Kok</h4>
          <mat-form-field class="recipe-form-field">
            <input matInput placeholder="Naam kok" <!-- add code here -->>
          </mat-form-field>
          <mat-form-field class="recipe-form-field">
            <input matInput placeholder="Afbeelding URL kok" <!-- add code here -->>
          </mat-form-field>
        </div>
        <div class="recipe-form-group" <!-- add code here -->>
          <h4>Ingrediënten</h4>
          <div class="recipe-form-group-ingredients" <!-- add code here -->>
            <mat-form-field class="recipe-form-ingredient">
              <input matInput placeholder="Ingrediënt" <!-- add code here -->>
            </mat-form-field>
            <mat-form-field class="recipe-form-ingredient-unit">
              <input matInput placeholder="Hoeveelheid" <!-- add code here -->>
            </mat-form-field>
            <button class="recipe-form-ingredient-delete" mat-icon-button <!-- add code here -->>
              <mat-icon aria-label="Ingrediënt verwijderen">delete</mat-icon>
            </button>
          </div>
          <button mat-button color="accent" <!-- add code here -->>TOEVOEGEN</button>
        </div>
      </div>
    </mat-card-content>
    <mat-card-actions align="end">
      <button mat-button color="accent" <!-- add code here -->">OPSLAAN</button>
      <button mat-button <!-- add code here -->>ANNULEREN</button>
    </mat-card-actions>
  </mat-card>
</form>

```

## recipe-add.component.scss

```css
.recipe-form {
  width: 800px;
}

mat-card-title {
  margin-top: 24px;
  margin-left: -16px;
}

.recipe-card {
  margin: 24px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;

  .recipe-form-group {
    width: 47%;
    flex-direction: column;
    flex-wrap: wrap;

    .recipe-form-field {
      width: 100%;
    }

    .recipe-form-group-ingredients {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: row;
      width: 100%;

      .recipe-form-ingredient {
        width: 60%;
      }

      .recipe-form-ingredient-unit {
        width: 23%;
      }

      .recipe-form-ingredient-delete {
        margin-top: 5px;
        width: 12%;
      }
    }
  }
}
```

## recipe-add.component.ts

```typescript
<!-- add code here -->

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

  recipeAddFormGroup: FormGroup;

  constructor(<!-- add code here -->) { }

  ngOnInit() {
    this.recipeAddFormGroup = this.formBuilder.group({
      <!-- add code here -->
    });    
  }

  <!-- add code here -->
}

```
