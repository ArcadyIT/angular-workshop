export interface Recipe {
  id: string;
  imageUrl: string;
  description: string;
  title: string;
  prep: string;
  chef: Chef;
  ingredients: Ingredient[];
}

export interface Chef {
  name: string;
  chefImageUrl: string;
}

export interface Ingredient {
  ingredientName: string;
  unit: string;
}
