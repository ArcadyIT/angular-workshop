# angular-workshop
Code snippets that go along with Arcady's Angular Workshop.

## app.component.html

```javascript
export class Recipe {
  id: string;
  imageUrl: string;
  description: string;
  title: string;
  prep: string;
  chef: Chef;
  ingredients: Ingredient[];
}

export class Chef {
  name: string;
  chefImageUrl: string;
}

export class Ingredient {
  ingredientName: string;
  unit: string;
}
```

## app.component.css

```css
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
}
```
