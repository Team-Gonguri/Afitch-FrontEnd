import { CategoryType } from './default';

export interface GetExercisesRes {
  exercises: SimpleExerciseDto[];
}

export interface SimpleExerciseDto {
  id: number;
  name: string;
}

export interface GetExercisesParams {
  category: CategoryType;
}

export interface GetExerciseDetailParams {
  exerciseId: number;
}

export interface GetExerciseDetailRes {
  category: CategoryType;
  expertURL: string;
  name: string;
}

export interface GetCategoriesRes {
  categories: CategoryType[];
}
