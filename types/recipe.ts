export interface RecipeIngredient {
  ingredientId: string;
  name: string;
  amount: number; // en gramos o ml
  unit: string;
  costPerUnit: number;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  yieldUnits: number; // Unidades que rinde la receta
  ingredients: RecipeIngredient[];
}