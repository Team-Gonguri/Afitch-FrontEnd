export type Authorities = 'ROLE_USER' | 'ROLE_ADMIN';

export type CategoryType = 'WHOLE' | 'ARM' | 'LEG' | 'ABDOMINAL' | 'CHEST';

export type DietType = 'BREAKFAST' | 'LUNCH' | 'DINNER' | 'SNACK' | string;

export interface Food {
  foodCategory: string;
  id: number;
  ingredients: Ingredient;
  name: string;
  size: number;
  unit: string;
  calories: number;
  carbohydrate: number;
  fat: number;
  protein: number;
}

export interface Ingredient {
  calories: number;
  carbohydrate: number;
  fat: number;
  protein: number;
}
