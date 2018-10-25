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
