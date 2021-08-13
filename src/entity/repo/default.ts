export type Authorities = 'ROLE_USER' | 'ROLE_ADMIN';

export interface Food {
  foodCategory: string;
  id: number;
  ingredients: Ingredient;
  name: string;
  size: number;
  unit: string;
}

export interface Ingredient {
  calories: number;
  carbohydrate: number;
  fat: number;
  protein: number;
}
