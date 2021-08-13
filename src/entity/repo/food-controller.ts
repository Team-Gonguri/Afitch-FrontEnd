import { Food } from './default';

export interface GetFoodCategoryRes {
  foodCategories: string[];
}

export interface GetFoodSearchParmas {
  keyword: string;
  page: number;
}

export interface GetFoodSearchRes {
  currentPages: number;
  foods: Food[];
  totalPages: number;
}
