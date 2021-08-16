import { Authorities, Food, Ingredient, DietType } from './default';

export interface GetDailyDietParmas {
  date: string;
  authorities?: Authorities;
  id?: number;
}

export interface GetDailyDietRes {
  BREAKFAST: SimpleMealDto | undefined;
  DINNER: SimpleMealDto | undefined;
  LUNCH: SimpleMealDto | undefined;
  SNACK: SimpleMealDto | undefined;
  ingredients: Ingredient;
}

export interface SimpleMealDto {
  createdAt: string;
  foods: SimpleFoodWrapperDto[];
  id: number;
  ingredient: Ingredient;
  type: DietType;
}

interface SimpleFoodWrapperDto {
  food: SimpleFoodDto;
  size: number;
}

interface SimpleFoodDto {
  id: number;
  name: string;
}

export interface SaveDietParams {
  authorities?: Authorities;
  id?: number;
}

export interface SaveDietReq {
  date: string;
  foods: FoodWrapperDto[];
  type: DietType;
}

export interface FoodWrapperDto {
  food: Food;
  size: number;
}

export interface SaveDietRes {
  createdAt: string;
  foods: FoodWrapperDto[];
  id: number;
  ingredients: Ingredient;
  type: DietType;
}

export interface GetDietParams {
  authorities: Authorities;
  id: number;
  mealId: number;
}

export interface GetDietRes {
  createdAt: string;
  foods: FoodWrapperDto[];
  id: number;
  ingredients: Ingredient;
  type: DietType;
}
